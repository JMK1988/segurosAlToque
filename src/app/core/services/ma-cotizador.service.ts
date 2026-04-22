import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
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

}
