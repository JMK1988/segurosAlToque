import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import {
  AtmBuscarVehiculoResponse,
  AtmCotizacionRequestDto,
  AtmCotizacionResponse,
} from '../models/atm-cotizador.models';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiCotizacionBrokerBaseUrl;

/**
 * Servicio de integración para ATM Seguros.
 * El broker (`apiCotizacionBrokerBaseUrl`, Railway `apisegurosaltoque`) traduce el SOAP/XML de ATM
 * y expone endpoints REST que devuelven JSON.
 *
 * Flujo de 2 pasos:
 * 1. GET /api/Atm/buscar-vehiculo?descripcion=X → obtiene marca/modelo internos de ATM
 * 2. POST /api/Atm/cotizar → cotiza con esos códigos
 */
@Injectable({ providedIn: 'root' })
export class AtmCotizadorService {
  private readonly http = inject(HttpClient);
  private readonly headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

  /** GET /api/Atm/buscar-vehiculo?descripcion=X */
  buscarVehiculo(descripcion: string): Observable<AtmBuscarVehiculoResponse[]> {
    return this.http.get<AtmBuscarVehiculoResponse[]>(`${BASE_URL}/api/Atm/buscar-vehiculo`, {
      params: { descripcion },
      headers: { Accept: 'application/json' },
    });
  }

  /** POST /api/Atm/cotizar */
  cotizar(request: AtmCotizacionRequestDto): Observable<AtmCotizacionResponse> {
    return this.http.post<AtmCotizacionResponse>(`${BASE_URL}/api/Atm/cotizar`, request, {
      headers: this.headers,
    });
  }

  /**
   * Flujo completo: busca el vehículo por descripción y luego cotiza.
   * ATM indexa sus vehículos por modelo (sin marca), por eso se prueban
   * varias estrategias de búsqueda en orden:
   *   1. Solo el modelo (2ª palabra del nombre)
   *   2. Solo la marca (1ª palabra)
   *   3. Las primeras 2 palabras juntas
   */
  cotizarConBusqueda(
    descripcion: string,
    params: {
      anio: number;
      codigoPostal: number;
      gnc?: boolean;
    },
  ): Observable<AtmCotizacionResponse> {
    const palabras = descripcion.trim().split(/\s+/);
    const marca = palabras[0] || '';
    const modelo = palabras[1] || '';

    // Estrategias de búsqueda en orden de preferencia
    const estrategias = [
      modelo,           // Solo el modelo: "CAPTUR", "CLIO", etc.
      marca,            // Solo la marca: "RENAULT", "FORD", etc.
      `${marca} ${modelo}`.trim(), // Ambas palabras juntas
    ].filter(Boolean);

    // Busca con cada estrategia hasta encontrar resultados
    const buscar = (terminos: string[]): Observable<AtmBuscarVehiculoResponse[]> => {
      if (terminos.length === 0) {
        return of([]);
      }
      const [actual, ...resto] = terminos;
      return this.buscarVehiculo(actual).pipe(
        switchMap((resultados) =>
          resultados && resultados.length > 0 ? of(resultados) : buscar(resto),
        ),
      );
    };

    return buscar(estrategias).pipe(
      switchMap((resultados) => {
        if (!resultados || resultados.length === 0) {
          throw new Error(
            `ATM Seguros: vehículo "${descripcion}" no disponible en el catálogo de ATM.`,
          );
        }

        // Tomar el primer resultado (el más relevante)
        const vehiculo = resultados[0];

        const request: AtmCotizacionRequestDto = {
          marca: vehiculo.marca,
          modelo: vehiculo.modelo,
          anioFab: params.anio.toString(),
          codPostal: params.codigoPostal.toString().padStart(4, '0'),
          ceroKm: 'N',
          alarma: '0',
          gnc: params.gnc ? '1' : '0',
        };

        return this.cotizar(request);
      }),
    );
  }
}
