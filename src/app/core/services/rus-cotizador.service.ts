import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RusCotizacionRequestDto, RusCotizacionResponse } from '../models/rus-cotizador.models';

const BASE_URL = '/api-proxy';

/**
 * Servicio de integracion para RUS (Rio Uruguay Seguros).
 */
@Injectable({ providedIn: 'root' })
export class RusCotizadorService {
  private readonly http = inject(HttpClient);
  private readonly headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

  /** PUT /api/Rus */
  cotizar(request: RusCotizacionRequestDto): Observable<RusCotizacionResponse> {
    return this.http.put<RusCotizacionResponse>(`${BASE_URL}/api/Rus`, request, {
      headers: this.headers,
    });
  }

  /** Helper: Arma el request con la estructura requerida por RUS */
  buildRequest(params: {
    codigoPostal: number;
    infoauto: number;
    anio: number;
    uso?: number;
    gnc?: boolean;
    rastreo?: number;
    cuotas?: number;
  }): RusCotizacionRequestDto {
    const hoy = new Date();
    const strHoy = hoy.toISOString().split('T')[0];

    // Vigencia de 6 meses por default para 'SEMESTRAL'
    const vigenciaHasta = new Date(hoy);
    vigenciaHasta.setMonth(vigenciaHasta.getMonth() + 6);
    const strVigenciaHasta = vigenciaHasta.toISOString().split('T')[0];

    return {
      codigoProductor: 12456, // Por ahora harcodeado como indica la doc
      codigoTipoInteres: 'VEHICULO',
      cuotas: params.cuotas ?? 1,
      numeroSolicitud: 2,
      condicionFiscal: 'CF', // Consumidor Final default
      tipoVigencia: 'SEMESTRAL', // default
      vehiculos: [
        {
          anio: params.anio.toString(),
          controlSatelital: params.rastreo ? 'SI' : 'NO',
          cpLocalidadGuarda: params.codigoPostal,
          gnc: params.gnc ? 'SI' : 'NO',
          codia: params.infoauto,
          rastreoACargoRUS: 'NO',
          uso: params.uso === 2 ? 'COMERCIAL' : 'PARTICULAR',
        },
      ],
      vigenciaDesde: strHoy,
      vigenciaHasta: strVigenciaHasta,
    };
  }
}
