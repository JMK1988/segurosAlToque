import { inject, Injectable, signal, computed } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
import { AtmCoberturaDto, AtmCotizacionResponse } from '../models/atm-cotizador.models';
import { AtmCotizadorService } from './atm-cotizador.service';
import { ProvinciaMultiQuoteResponse } from '../models/provincia-cotizador.models';
import { ProvinciaCotizadorService } from './provincia-cotizador.service';

/**
 * Servicio orquestador del multicotizador.
 * Para agregar una nueva aseguradora, ver MULTICOTIZADOR_INTEGRACION.md
 */
@Injectable({ providedIn: 'root' })
export class CotizadorService {
  private readonly maService = inject(MaCotizadorService);
  private readonly rusService = inject(RusCotizadorService);
  private readonly atmService = inject(AtmCotizadorService);
  private readonly provinciaService = inject(ProvinciaCotizadorService);

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
    atm: this.initialResultado('atm', 'ATM Seguros', 'assets/logos/atm.png'),
    provincia: this.initialResultado('provincia', 'Provincia Seguros', 'assets/logos/provincia.png'),
    san_cristobal: this.initialResultado('san_cristobal', 'San Cristobal', 'assets/logos/san_cristobal.png'),
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
    console.log('[CotizadorService] Request MA JSON:', JSON.stringify(maRequest, null, 2));

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

    const rus$ = this.rusService.versionToCodia(String(datos.vehiculo.infoauto)).pipe(
      switchMap((codia) => {
        if (!codia) {
          throw new Error(
            'RUS: no se pudo mapear la version seleccionada al codigo CODIA requerido.',
          );
        }
        const rusRequest = this.rusService.buildRequest({
          codigoPostal: datos.localidad.codigo_postal,
          infoauto: codia,
          anio: datos.vehiculo.anio,
          uso: datos.vehiculo.uso,
          gnc: datos.vehiculo.gnc,
          rastreo: datos.vehiculo.rastreo,
          cuotas: datos.cuotas,
        });
        console.log('[CotizadorService] RUS codia resuelto:', codia);
        console.log('[CotizadorService] Request RUS JSON:', JSON.stringify(rusRequest, null, 2));
        return this.rusService.cotizar(rusRequest);
      }),
      map((resp: any) => {
        if (resp && resp.cantidadTotal > 0 && resp.dtoList) {
          return { ok: true, data: this._normalizarRus(resp) };
        }
        throw new Error('La aseguradora RUS no devolvio resultados.');
      }),
      catchError((err) => {
        console.error('[CotizadorService] Error RUS:', err);
        const backendMsg =
          err?.error?.message ||
          err?.error?.mensaje ||
          err?.error?.title ||
          err?.message;
        const msg =
          typeof backendMsg === 'string' && backendMsg.length > 0
            ? `RUS: ${backendMsg}`
            : 'Error al conectar con la aseguradora RUS.';
        return of({ ok: false, error: msg });
      }),
    );

    // ATM necesita el nombre del vehículo para buscar sus códigos internos
    const nombreVehiculo = datos.nombreVehiculo || '';

    const atm$ = (nombreVehiculo
      ? this.atmService.cotizarConBusqueda(nombreVehiculo, {
          anio: datos.vehiculo.anio,
          codigoPostal: datos.localidad.codigo_postal,
          gnc: datos.vehiculo.gnc,
        })
      : of(null as any)
    ).pipe(
      map((resp: AtmCotizacionResponse | null) => {
        if (!resp) {
          throw new Error('ATM Seguros: se necesita el nombre del vehículo para cotizar.');
        }
        console.log('[CotizadorService] Request ATM contexto:', JSON.stringify(
          {
            nombreVehiculo,
            anio: datos.vehiculo.anio,
            codigoPostal: datos.localidad.codigo_postal,
            gnc: datos.vehiculo.gnc,
          },
          null,
          2,
        ));
        if (!resp.success || !resp.coberturas?.length) {
          const errMsg = resp.mensajesError?.[0] || 'ATM Seguros no devolvió resultados para este vehículo.';
          throw new Error(errMsg);
        }
        return { ok: true, data: this._normalizarAtm(resp) };
      }),
      catchError((err) => {
        console.error('[CotizadorService] Error ATM:', err);
        const msg =
          err instanceof Error ? err.message : 'Error al conectar con la aseguradora ATM.';
        return of({ ok: false, error: msg });
      }),
    );

    const provincia$ = this.provinciaService
      .resolveVehicleCodes({
        marca: datos.marca,
        modelo: datos.modelo,
        versionCode: String(datos.vehiculo.infoauto),
        anio: String(datos.vehiculo.anio),
      })
      .pipe(
        switchMap((vehicleCodes) => {
          const provinciaRequest = this.provinciaService.buildRequest({
            datos,
            vehicleCodes,
          });
          console.log(
            '[CotizadorService] Provincia vehicleCodes resueltos:',
            JSON.stringify(vehicleCodes, null, 2),
          );
          console.log(
            '[CotizadorService] Request Provincia JSON:',
            JSON.stringify(provinciaRequest, null, 2),
          );
          return this.provinciaService.cotizar(provinciaRequest);
        }),
        map((resp: ProvinciaMultiQuoteResponse) => {
          console.log('--- RESTULTADO MULTIQUOTE COMPLETO (PROVINCIA + SAN CRISTOBAL) ---');
          console.log(JSON.stringify(resp, null, 2));
          console.log('------------------------------------------------------------------');
          const provinciaResult = resp.results?.find((item) => item.insurer === 'provincia');
          const scResult = resp.results?.find((item) => item.insurer === 'san_cristobal');

          const buildOutput = (result: any, insurerCode: string, name: string) => {
            if (!resp.success || !result?.plans?.length) {
              const errorItem = resp.errors?.find((item) => item.insurer === insurerCode);
              return { ok: false, error: errorItem?.message || `${name} no devolvió coberturas para los datos ingresados.` };
            }
            return { ok: true, data: this._normalizarProvincia(result) };
          };

          return {
            provincia: buildOutput(provinciaResult, 'provincia', 'Provincia Seguros'),
            san_cristobal: buildOutput(scResult, 'san_cristobal', 'San Cristobal')
          };
        }),
        catchError((err) => {
          console.error('[CotizadorService] Error MultiQuote Backend:', err);
          const msg =
            err instanceof Error
              ? err.message
              : err?.error?.message || err?.message || 'Error al conectar con la aseguradora multi-broker.';
          return of({
            provincia: { ok: false, error: msg },
            san_cristobal: { ok: false, error: msg }
          });
        }),
      );

    forkJoin({ ma: ma$, rus: rus$, atm: atm$, multi: provincia$ }).subscribe(
      ({ ma, rus, atm, multi }) => {
      console.timeEnd('[CotizadorService] Tiempo total cotización');
      this._actualizarAseguradora('ma', (prev) => {
        if (!ma.ok) return { ...prev, estado: 'error', error: (ma as any).error };
        return { ...prev, ...(ma as any).data, estado: 'ok' };
      });
      this._actualizarAseguradora('rus', (prev) => {
        if (!rus.ok) return { ...prev, estado: 'error', error: (rus as any).error };
        return { ...prev, ...(rus as any).data, estado: 'ok' };
      });
      this._actualizarAseguradora('atm', (prev) => {
        if (!atm.ok) return { ...prev, estado: 'error', error: (atm as any).error };
        return { ...prev, ...(atm as any).data, estado: 'ok' };
      });
      this._actualizarAseguradora('provincia', (prev) => {
        if (!multi.provincia.ok) return { ...prev, estado: 'error', error: multi.provincia.error };
        return { ...prev, ...(multi.provincia as any).data, estado: 'ok' };
      });
      this._actualizarAseguradora('san_cristobal', (prev) => {
        if (!multi.san_cristobal.ok) return { ...prev, estado: 'error', error: multi.san_cristobal.error };
        return { ...prev, ...(multi.san_cristobal as any).data, estado: 'ok' };
      });
      this._cargando.set(false);
      },
    );
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

  private _normalizarAtm(resp: AtmCotizacionResponse): Partial<ResultadoAseguradora> {
    const lista = resp.coberturas || [];

    // Agrupar por código: nos quedamos con la opción de menor importeCuota (precio mensual)
    const codigos = new Map<string, AtmCoberturaDto>();
    for (const c of lista) {
      const prev = codigos.get(c.codigo);
      if (!prev || c.importeCuota < prev.importeCuota) {
        codigos.set(c.codigo, c);
      }
    }

    const coberturas: CoberturaResultado[] = [...codigos.values()]
      .map((c): CoberturaResultado => {
        const cod = c.codigo?.toUpperCase() || '';
        const tieneGranizo =
          cod === 'D' ||
          cod.startsWith('D') ||
          c.descripcion?.toLowerCase().includes('granizo') ||
          false;

        // ATM: requiere inspección si no es RC puro
        const requiereInspeccion = cod !== 'A1' && cod !== 'A0' && cod !== 'A';

        const beneficios = this._getBeneficiosAtm(cod, c.descripcion);
        const descFiltro = this._humanizarNombreAtm(cod, c.descripcion);
        const cuotas = parseInt(c.cuotas || '1', 10) || 1;

        // ATM devuelve el premio TOTAL (de todas las cuotas) y el importeCuota por cuota.
        // La UI muestra el precio mensual → usamos importeCuota como "premio" de la UI.
        const precioMensual = c.importeCuota;
        // Prima proporcional a la cuota (misma proporción que en el total)
        const primaMensual = c.premio > 0 ? Number(((c.prima / c.premio) * precioMensual).toFixed(2)) : precioMensual;
        const ivaMensual = Number((precioMensual - primaMensual).toFixed(2));

        return {
          codigoProducto: c.codigo,
          descripcion: descFiltro,
          premio: precioMensual,
          prima: primaMensual,
          iva: ivaMensual,
          cantidadCuotas: cuotas,
          importeCuota: precioMensual,
          granizo: tieneGranizo,
          requiereInspeccion,
          beneficios,
          codigoInterno: 0,
          franquicia: 0,
        };
      })
      .sort((a, b) => a.premio - b.premio); // menor a mayor precio

    return {
      coberturas,
      fechaCotizacion: new Date().toISOString(),
      vehiculo: {
        nombre: 'Vehículo Cotizado',
        valor: 0,
        sumaAsegurada: 0,
      },
    };
  }

  private _normalizarProvincia(
    result: ProvinciaMultiQuoteResponse['results'][number],
  ): Partial<ResultadoAseguradora> {
    const coberturas: CoberturaResultado[] = (result.plans || [])
      .map((plan): CoberturaResultado => {
        const descripcionNormalizada = this._humanizarNombreProvincia(plan.planName, plan.description);
        const premio = plan.monthlyPremium ?? plan.annualReferencePremium ?? 0;
        const prima = Number((premio / 1.21).toFixed(2));
        const iva = Number((premio - prima).toFixed(2));
        const beneficios = this._getBeneficiosProvincia(descripcionNormalizada);

        return {
          codigoProducto: plan.planId,
          descripcion: descripcionNormalizada,
          premio,
          prima,
          iva,
          cantidadCuotas: 1,
          importeCuota: premio,
          granizo: beneficios.some((item) => item.toLowerCase().includes('granizo')),
          requiereInspeccion: !descripcionNormalizada.includes('RESPONSABILIDAD CIVIL'),
          beneficios,
          codigoInterno: 0,
          franquicia: 0,
        };
      })
      .sort((a, b) => a.premio - b.premio);

    return {
      coberturas,
      fechaCotizacion: result.quoteDate || new Date().toISOString(),
      vehiculo: {
        nombre: 'Vehículo Cotizado',
        valor: 0,
        sumaAsegurada: 0,
      },
    };
  }

  private _humanizarNombreProvincia(planName: string, description?: string): string {
    const base = (planName || '').toUpperCase();
    if (base.includes('TODO RIESGO') || base.includes('TR')) {
      return `TODO RIESGO - ${planName}`;
    }
    if (
      base.includes('TERCEROS') ||
      base.includes('COMPLETO') ||
      base.includes('ROBO') ||
      base.includes('INCENDIO')
    ) {
      return `TERCEROS - ${planName}`;
    }
    if (base.includes('RC') || base.includes('RESPONSABILIDAD')) {
      return `RESPONSABILIDAD CIVIL - ${planName}`;
    }
    return description ? `${planName} - ${description}` : planName;
  }

  private _getBeneficiosProvincia(descripcion: string): string[] {
    const base = ['Responsabilidad Civil (Límite Legal)', 'Asistencia Jurídica'];
    const d = descripcion.toUpperCase();
    if (d.includes('TODO RIESGO')) {
      return [
        ...base,
        'Daños Parciales por Accidente',
        'Robo/Hurto Total y Parcial',
        'Incendio Total y Parcial',
        'Destrucción Total por Accidente',
      ];
    }
    if (d.includes('TERCEROS')) {
      return [...base, 'Robo/Hurto Total', 'Incendio Total', 'Destrucción Total por Accidente'];
    }
    return base;
  }

  private _humanizarNombreAtm(cod: string, descripcionApi: string): string {
    const d = descripcionApi?.toUpperCase() || '';
    if (cod === 'A0' || cod === 'A')
      return `RESPONSABILIDAD CIVIL - ${descripcionApi || 'Responsabilidad Civil'}`;
    if (d.includes('RIESGO') || cod.startsWith('D'))
      return `TODO RIESGO - ${descripcionApi}`;
    if (d.includes('ROBO') || d.includes('TERCERO') || d.includes('CLASICO'))
      return `TERCEROS - ${descripcionApi}`;
    return descripcionApi || cod;
  }

  private _getBeneficiosAtm(cod: string, descripcion: string): string[] {
    const base = ['Responsabilidad Civil (Límite Legal)', 'Asistencia Jurídica'];
    const d = descripcion?.toUpperCase() || '';

    if (cod === 'A0' || cod === 'A') return base;

    const extras: string[] = [];
    if (d.includes('ROBO') && d.includes('TOTAL')) extras.push('Robo/Hurto Total');
    if (d.includes('ROBO') && d.includes('PARCIAL')) extras.push('Robo/Hurto Parcial');
    if (d.includes('INCENDIO')) extras.push('Incendio Total/Parcial');
    if (d.includes('GRANIZO')) extras.push('Granizo (Sin límite)');
    if (cod.startsWith('D') || d.includes('RIESGO')) {
      extras.push('Daños Parciales por Accidente', 'Destrucción Total por Accidente');
    }

    return [...base, ...extras];
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
