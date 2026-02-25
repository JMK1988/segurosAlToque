import { inject, Injectable, signal, computed } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  AseguradoraId,
  CoberturaResultado,
  DatosCotizacion,
  ResultadoAseguradora,
} from '../models/cotizador.models';
import { MaProductoResultado, MercantilAndinaResponse } from '../models/ma-cotizador.models';
import { MaCotizadorService } from './ma-cotizador.service';
import { RusCotizacionResponse } from '../models/rus-cotizador.models';
import { RusCotizadorService } from './rus-cotizador.service';

/**
 * Servicio orquestador del multicotizador.
 * Para agregar una nueva aseguradora, ver MULTICOTIZADOR_INTEGRACION.md
 */
@Injectable({ providedIn: 'root' })
export class CotizadorService {
  private readonly maService = inject(MaCotizadorService);
  private readonly rusService = inject(RusCotizadorService);

  // ── Estado reactivo ───────────────────────────────────────

  private readonly _cargando = signal(false);
  private readonly _datosCotizacion = signal<DatosCotizacion | null>(null);
  private readonly _datosWidget = signal<{
    marca: string;
    modelo: string;
    version: string;
    anio: number;
  } | null>(null);

  private readonly _resultados = signal<Record<AseguradoraId, ResultadoAseguradora>>({
    ma: this.initialResultado('ma', 'Mercantil Andina', 'assets/logos/ma.png'),
    rus: this.initialResultado('rus', 'RUS', 'assets/logos/rus.png'),
  });

  readonly cargando = this._cargando.asReadonly();
  readonly datosCotizacion = this._datosCotizacion.asReadonly();
  readonly datosWidget = this._datosWidget.asReadonly();
  readonly resultados = this._resultados.asReadonly();

  /** Todas las coberturas de todas las aseguradoras, aplanadas y ordenadas por precio. */
  readonly todasLasCoberturas = computed(() =>
    Object.values(this._resultados())
      .filter((r) => r.estado === 'ok')
      .flatMap((r) =>
        r.coberturas.map((c) => ({
          ...c,
          aseguradora: r.aseguradora,
          nombreAseguradora: r.nombreAseguradora,
          logoUrl: r.logoUrl,
        })),
      )
      .sort((a, b) => a.premio - b.premio),
  );

  /** ¿Alguna aseguradora sigue cargando? */
  readonly hayCargando = computed(() =>
    Object.values(this._resultados()).some((r) => r.estado === 'cargando'),
  );

  /** ¿Hubo algún error? */
  readonly hayError = computed(() =>
    Object.values(this._resultados()).some((r) => r.estado === 'error'),
  );

  // ── Acción principal ──────────────────────────────────────

  guardarDatosWidget(
    datos: { marca: string; modelo: string; version: string; anio: number } | null,
  ): void {
    this._datosWidget.set(datos);
  }

  cotizar(datos: DatosCotizacion): void {
    console.time('[CotizadorService] Tiempo total cotización');
    this._datosCotizacion.set(datos);
    this._cargando.set(true);

    this._actualizarTodas((r) => ({ ...r, estado: 'cargando', coberturas: [], error: undefined }));

    const maRequest = this.maService.buildRequest({
      codigoPostal: datos.localidad.codigo_postal,
      infoauto: datos.vehiculo.infoauto,
      anio: datos.vehiculo.anio,
      uso: datos.vehiculo.uso,
      gnc: datos.vehiculo.gnc,
      rastreo: datos.vehiculo.rastreo,
      cuotas: datos.cuotas,
      tipoPago: datos.tipo_pago,
    });

    const ma$ = this.maService.cotizar(maRequest).pipe(
      map((resp: any) => {
        console.timeLog(
          '[CotizadorService] Tiempo total cotización',
          'Respuesta recibida de la API',
        );

        // Si la aseguradora responde pero con un estado de error (ej: CONFLICT)
        if (resp.estado && resp.estado !== 'OK') {
          const errorMsg =
            resp.mensaje ||
            (resp.errores && resp.errores[0]) ||
            'Error en la consulta a la aseguradora.';
          throw new Error(errorMsg);
        }

        if (!resp.resultado) {
          throw new Error('La aseguradora no devolvió resultados para este vehículo.');
        }

        return { ok: true, data: this._normalizarMa(resp) };
      }),
      catchError((err) => {
        console.error('[CotizadorService] Error MA:', err);
        const msg =
          err instanceof Error
            ? err.message
            : err?.error?.mensaje || 'Error al conectar con la aseguradora MA.';
        return of({ ok: false, error: msg });
      }),
    );

    const rusRequest = this.rusService.buildRequest({
      codigoPostal: datos.localidad.codigo_postal,
      infoauto: datos.vehiculo.infoauto,
      anio: datos.vehiculo.anio,
      uso: datos.vehiculo.uso,
      gnc: datos.vehiculo.gnc,
      rastreo: datos.vehiculo.rastreo,
      cuotas: datos.cuotas,
    });

    const rus$ = this.rusService.cotizar(rusRequest).pipe(
      map((resp: any) => {
        if (resp && resp.cantidadTotal > 0 && resp.dtoList) {
          return { ok: true, data: this._normalizarRus(resp) };
        }
        throw new Error('La aseguradora RUS no devolvió resultados.');
      }),
      catchError((err) => {
        console.error('[CotizadorService] Error RUS:', err);
        const msg =
          err instanceof Error ? err.message : 'Error al conectar con la aseguradora RUS.';
        return of({ ok: false, error: msg });
      }),
    );

    forkJoin({ ma: ma$, rus: rus$ }).subscribe(({ ma, rus }) => {
      console.timeEnd('[CotizadorService] Tiempo total cotización');
      this._actualizarAseguradora('ma', (prev) => {
        if (!ma.ok) {
          return { ...prev, estado: 'error', error: (ma as any).error };
        }
        return { ...prev, ...(ma as any).data, estado: 'ok' };
      });
      this._actualizarAseguradora('rus', (prev) => {
        if (!rus.ok) {
          return { ...prev, estado: 'error', error: (rus as any).error };
        }
        return { ...prev, ...(rus as any).data, estado: 'ok' };
      });
      this._cargando.set(false);
    });
  }

  limpiar(): void {
    this._datosCotizacion.set(null);
    this._cargando.set(false);
    this._actualizarTodas((r) => ({ ...r, estado: 'idle', coberturas: [], error: undefined }));
  }

  // ── Normalización ─────────────────────────────────────────

  private _humanizarNombre(p: MaProductoResultado): string {
    const prod = p.producto?.toUpperCase() || '';
    if (prod === 'A') return 'Responsabilidad Civil';

    // Diferenciación de la Serie B (Terceros Básicos)
    if (prod === 'B') return 'Terceros Básico (Incendio y Robo Total)';
    if (prod === 'B1') return 'Terceros Básico + Destrucción Total';
    if (prod === 'B0') return 'Terceros Básico + Incendio Parcial';
    if (prod === 'B3') return 'Terceros Básico + Incendio y Robo Parcial';

    if (prod === 'M BASICA') return 'Terceros Completo';
    if (prod === 'M PLUS') return 'Terceros Completo Full (Granizo y Cristales)';
    if (prod.startsWith('D')) return 'Todo Riesgo (Con Franquicia)';

    return p.titulo || p.descripcion;
  }

  private _getBeneficios(prod: string): string[] {
    const p = prod.toUpperCase();
    const base = [
      'Responsabilidad Civil (Límite Legal)',
      'Asistencia Jurídica',
      'Asistencia Mecánica (200km)',
    ];

    if (p === 'A') return base;

    const tercerosMap: Record<string, string[]> = {
      B: ['Incendio Total', 'Robo/Hurto Total'],
      B1: ['Incendio Total', 'Robo/Hurto Total', 'Destrucción Total por Accidente (Cláusula 80%)'],
      B0: ['Incendio Total/Parcial', 'Robo Total'],
      B3: ['Incendio Total/Parcial', 'Robo Total/Parcial'],
    };

    if (tercerosMap[p]) return [...base, ...tercerosMap[p]];

    // Terceros Completo (M)
    if (p === 'M BASICA' || p === 'M PLUS') {
      const mBase = [
        ...base,
        'Incendio Total/Parcial',
        'Robo Total/Parcial',
        'Destrucción Total por Accidente',
        'Asistencia Mecánica (500km)',
      ];
      if (p === 'M PLUS') {
        return [
          ...mBase,
          'Granizo (Sin límite)',
          'Cristales Laterales y Traseros',
          'Parabrisas',
          'Cerraduras y Llaves',
          'Daños por Inundación',
        ];
      }
      return mBase;
    }

    // Todo Riesgo (D)
    if (p.startsWith('D')) {
      return [
        ...base,
        'Daños Parciales por Accidente (Con Franquicia)',
        'Incendio Total/Parcial',
        'Robo Total/Parcial',
        'Destrucción Total por Accidente',
        'Granizo (Sin límite)',
        'Cristales, Parabrisas y Cerraduras',
        'Asistencia Mecánica VIP',
      ];
    }

    return base;
  }

  private _normalizarMa(resp: MercantilAndinaResponse): Partial<ResultadoAseguradora> {
    const coberturas: CoberturaResultado[] = (resp.resultado || [])
      .filter((p) => !p.error)
      .map((p: MaProductoResultado): CoberturaResultado => {
        const prod = p.producto?.toUpperCase() || '';
        const tieneGranizo = p.adicional?.granizo || prod === 'M PLUS' || prod.startsWith('D');

        // Lógica de inspección mejorada
        // Si el plan es mayor a RC (A) y no es 0km, suele requerir inspección.
        // Si la aseguradora trae opciones de inspección, es un "Si" rotundo.
        const inspeccionApi =
          p.inspeccion?.opciones?.some((o) => o.id !== null && o.id !== '0') || false;
        const requiereInspeccion =
          prod !== 'A' && (inspeccionApi || p.inspeccion?.opciones?.length > 0);

        return {
          codigoProducto: p.producto,
          descripcion: this._humanizarNombre(p),
          premio: p.costo,
          prima: p.desglose?.total?.prima || 0,
          iva: p.desglose?.total?.iva || 0,
          cantidadCuotas: p.cantidad_cuotas,
          importeCuota: p.desglose?.cuotas?.[0]?.cuota ?? 0,
          granizo: tieneGranizo,
          requiereInspeccion: requiereInspeccion,
          beneficios: this._getBeneficios(prod),
          codigoInterno: p.codigo_producto,
          franquicia: p.franquicia || 0,
        };
      })
      .sort((a, b) => b.premio - a.premio);

    return {
      coberturas,
      fechaCotizacion: resp.fecha_cotizacion,
      vehiculo: {
        nombre: resp.vehiculo.nombre,
        valor: resp.vehiculo.valor,
        sumaAsegurada: resp.suma_asegurada,
      },
    };
  }

  private _normalizarRus(resp: RusCotizacionResponse): Partial<ResultadoAseguradora> {
    const coberturas: CoberturaResultado[] = (resp.dtoList || [])
      .map((p) => {
        const tieneGranizo =
          p.descripcionCasco?.toLowerCase().includes('granizo') ||
          p.detalleCoberturaCasco?.toLowerCase().includes('granizo') ||
          false;
        const requiereInspeccion = p.codigoCasco !== null && p.codigoCasco !== '';
        const baseBeneficios = ['Responsabilidad Civil (Límite Legal)', 'Asistencia Jurídica'];
        if (p.auxilioMecanico === 'SI') baseBeneficios.push('Asistencia Mecánica');
        if (p.paisesLimitrofes === 'SI') baseBeneficios.push('Cobertura Países Limítrofes');

        // Normalizamos la descripción para el filtro
        let descFiltro = p.descripcionComercial || 'RUS Seguros';
        const prod = p.codigoCasco?.toUpperCase() || '';

        if (p.codigoCasco) {
          // Reglas de negocio mapeadas a nombres genéricos para el filtro
          if (prod.startsWith('D') || /^T\d{2}$/.test(prod)) {
            descFiltro = `TODO RIESGO - ${descFiltro}`;
          } else if (
            prod === 'B' ||
            prod === 'B1' ||
            prod === 'B0' ||
            prod === 'B3' ||
            prod === 'M BASICA' ||
            prod === 'M PLUS'
          ) {
            descFiltro = `TERCEROS - ${descFiltro}`;
          } else {
            descFiltro = `TERCEROS - ${descFiltro}`; // Por defecto asumimos terceros si tiene casco
          }
        } else {
          descFiltro = `RESPONSABILIDAD CIVIL - ${descFiltro}`;
        }

        // RUS devuelve totales por el periodo semestral, dividimos por 6 para obtener el valor mensual
        const valorMensualPremio = Number(((p.premio || 0) / 6).toFixed(2));
        const valorMensualPrima = Number(((p.prima || 0) / 6).toFixed(2));
        const valorMensualIva = Number(((p.iva || 0) / 6).toFixed(2));

        return {
          codigoProducto: p.codigoCasco || p.codigoRC,
          descripcion: descFiltro,
          premio: valorMensualPremio,
          prima: valorMensualPrima,
          iva: valorMensualIva,
          cantidadCuotas: 6,
          importeCuota: valorMensualPremio,
          granizo: tieneGranizo,
          requiereInspeccion,
          beneficios: baseBeneficios,
          codigoInterno: 0,
          franquicia: p.franquicia || 0,
        };
      })
      .sort((a, b) => b.premio - a.premio);

    return {
      coberturas,
      fechaCotizacion: new Date().toISOString(),
      vehiculo: {
        nombre: 'Vehículo Cotizado',
        valor: resp.dtoList[0]?.sumaAsegurada || 0,
        sumaAsegurada: resp.dtoList[0]?.sumaAsegurada || 0,
      },
    };
  }

  // ── Helpers ───────────────────────────────────────────────

  private _actualizarAseguradora(
    id: AseguradoraId,
    fn: (prev: ResultadoAseguradora) => ResultadoAseguradora,
  ): void {
    this._resultados.update((prev) => ({ ...prev, [id]: fn(prev[id]) }));
  }

  private _actualizarTodas(fn: (prev: ResultadoAseguradora) => ResultadoAseguradora): void {
    this._resultados.update((prev) => {
      const updated = {} as Record<AseguradoraId, ResultadoAseguradora>;
      for (const key of Object.keys(prev) as AseguradoraId[]) {
        updated[key] = fn(prev[key]);
      }
      return updated;
    });
  }

  private initialResultado(
    aseguradora: AseguradoraId,
    nombre: string,
    logo: string,
  ): ResultadoAseguradora {
    return {
      aseguradora,
      nombreAseguradora: nombre,
      logoUrl: logo,
      estado: 'idle',
      coberturas: [],
      fechaCotizacion: null,
    };
  }
}
