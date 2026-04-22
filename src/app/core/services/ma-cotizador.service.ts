import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MercantilAndinaRequestDto,
  MercantilAndinaResponse,
  VehicleBrandsResponse,
  VehicleModelsResponse,
  VehicleVersionsResponse,
} from '../models/ma-cotizador.models';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiCotizacionBrokerBaseUrl;

/**
 * Servicio de bajo nivel para el broker de cotización (host `apiCotizacionBrokerBaseUrl`).
 * Cubre los vehículos (InfoAuto) y cotización de Mercantil Andina.
 */
@Injectable({ providedIn: 'root' })
export class MaCotizadorService {
  private readonly http = inject(HttpClient);
  private readonly headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

  // ── Vehículos (InfoAuto) ──────────────────────────────────

  /** GET /api/MA/marcas → string[] */
  getMarcas(): Observable<VehicleBrandsResponse> {
    return this.http.get<VehicleBrandsResponse>(`${BASE_URL}/api/MA/marcas`, {
      headers: this.headers,
    });
  }

  /** GET /api/MA/modelos?marca={marca} → string[] */
  getModelos(marca: string): Observable<VehicleModelsResponse> {
    return this.http.get<VehicleModelsResponse>(`${BASE_URL}/api/MA/modelos`, {
      params: { marca },
      headers: this.headers,
    });
  }

  /** GET /api/MA/versiones?marca={marca}&modelo={modelo} → VehicleVersion[] */
  getVersiones(marca: string, modelo: string): Observable<VehicleVersionsResponse> {
    return this.http.get<VehicleVersionsResponse>(`${BASE_URL}/api/MA/versiones`, {
      params: { marca, modelo },
      headers: this.headers,
    });
  }

  // ── Cotización MA ─────────────────────────────────────────

  /** POST /api/Cotizacion/mercantilandina/test */
  cotizar(request: MercantilAndinaRequestDto): Observable<MercantilAndinaResponse> {
    return this.http.post<MercantilAndinaResponse>(
      `${BASE_URL}/api/Cotizacion/mercantilandina/test`,
      request,
      { headers: this.headers },
    );
  }

  /** Helper: arma el request con defaults razonables */
  buildRequest(params: {
    codigoPostal: number;
    infoauto: number;
    anio: number;
    uso?: number;
    gnc?: boolean;
    rastreo?: number;
    cuotas?: number;
    tipoPago?: 'D' | 'C';
    ajusteSuma?: number;
    comision?: number;
    iva?: number;
  }): MercantilAndinaRequestDto {
    return {
      localidad: { codigo_postal: params.codigoPostal },
      vehiculo: {
        infoauto: params.infoauto,
        anio: params.anio,
        uso: params.uso ?? 1,
        gnc: params.gnc ?? false,
        rastreo: params.rastreo ?? 0,
      },
      comision: params.comision ?? 20,
      bonificacion: 0,
      periodo: 1,
      cuotas: params.cuotas ?? 1,
      pago: { tipo_pago: params.tipoPago ?? 'D' },
      ajuste_suma: params.ajusteSuma ?? 25,
      iva: params.iva ?? 5,
      desglose: true,
    };
  }
}
