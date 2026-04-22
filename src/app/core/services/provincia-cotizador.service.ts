import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { DatosCotizacion } from '../models/cotizador.models';
import {
  ProvinciaMultiQuoteRequest,
  ProvinciaMultiQuoteResponse,
} from '../models/provincia-cotizador.models';
import { environment } from '../../../environments/environment';

const API_BASE = environment.apiBrokerBaseUrl;
const PROVINCIA_DEFAULT_BRAND_CODE = 'TOY';
const PROVINCIA_DEFAULT_MODEL_CODE = '045307';

type ProvinciaBrandCatalog = {
  code: string;
  models: Record<string, string>;
};

type ProvinciaCatalogItem = {
  code: string;
  name: string;
};

type ProvinciaBrandsResponse = {
  success: boolean;
  items: ProvinciaCatalogItem[];
};

type ProvinciaModelsResponse = {
  success: boolean;
  brandCode: string;
  items: ProvinciaCatalogItem[];
};

type ProvinciaSearchItem = {
  brandCode: string;
  brandName: string;
  modelCode: string;
  modelName: string;
};

type ProvinciaSearchResponse = {
  success: boolean;
  items: ProvinciaSearchItem[];
};

// Mapeo inicial Marca/Modelo -> códigos paramétricos de Provincia.
// Se puede ampliar incrementalmente a medida que validemos códigos reales.
const PROVINCIA_CATALOG: Record<string, ProvinciaBrandCatalog> = {
  TOYOTA: {
    code: 'TOY',
    models: {
      ETIOS: '045307',
    },
  },
  VOLKSWAGEN: { code: 'VOL', models: {} },
  FORD: { code: 'FOR', models: {} },
  FIAT: { code: 'FIA', models: {} },
  PEUGEOT: { code: 'PEU', models: {} },
  CHEVROLET: { code: 'CHE', models: {} },
  RENAULT: { code: 'REN', models: {} },
  CITROEN: { code: 'CIT', models: {} },
  NISSAN: { code: 'NIS', models: {} },
  HONDA: { code: 'HON', models: {} },
  JEEP: { code: 'JEE', models: {} },
  AUDI: { code: 'AUD', models: {} },
  BMW: { code: 'BMW', models: {} },
  MERCEDES: { code: 'MER', models: {} },
  'MERCEDES BENZ': { code: 'MER', models: {} },
};

@Injectable({ providedIn: 'root' })
export class ProvinciaCotizadorService {
  private readonly http = inject(HttpClient);
  private readonly headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

  cotizar(payload: ProvinciaMultiQuoteRequest): Observable<ProvinciaMultiQuoteResponse> {
    return this.http.post<ProvinciaMultiQuoteResponse>(
      `${API_BASE}/api/v1/quotes/auto/multi`,
      payload,
      { headers: this.headers },
    );
  }

  getBrands(): Observable<ProvinciaBrandsResponse> {
    return this.http.get<ProvinciaBrandsResponse>(`${API_BASE}/api/v1/catalog/provincia/brands`, {
      headers: this.headers,
    });
  }

  getModels(brandCode: string, anio: string): Observable<ProvinciaModelsResponse> {
    return this.http.get<ProvinciaModelsResponse>(
      `${API_BASE}/api/v1/catalog/provincia/models`,
      {
        params: { brandCode, anio },
        headers: this.headers,
      },
    );
  }

  searchCatalog(query: string): Observable<ProvinciaSearchResponse> {
    return this.http.get<ProvinciaSearchResponse>(
      `${API_BASE}/api/v1/catalog/provincia/search`,
      {
        params: { query },
        headers: this.headers,
      },
    );
  }

  resolveVehicleCodes(params: {
    marca?: string;
    modelo?: string;
    versionCode?: string;
    anio?: string;
  }): Observable<{ brandCode: string; modelCode: string }> {
    const localFallback = this.getVehicleCodes(params.marca, params.modelo, params.versionCode);
    const marca = (params.marca || '').trim().toUpperCase();
    const modelo = (params.modelo || '').trim().toUpperCase();
    const query = `${params.marca || ''} ${params.modelo || ''}`.trim();
    const anio = params.anio || '2024';

    if (!marca) {
      return of(localFallback);
    }

    return this.getBrands().pipe(
      switchMap((brandsResp) => {
        const brands = brandsResp.items || [];
        // Intentamos un match exacto, y luego parcial (para 'BAIC' si en DB dice 'BAIC (MOTORES)')
        const brandMatch =
          brands.find((item) => item.name?.toUpperCase() === marca) ||
          brands.find((item) => item.name?.toUpperCase().includes(marca));

        console.log('[Provincia] Búsqueda Marca:', { marca, encontrado: brandMatch });

        if (!brandMatch?.code) {
          if (!query) return of(localFallback);
          return this.searchCatalog(query).pipe(
            map((searchResp) => {
              const match = searchResp.items?.[0];
              return match
                ? { brandCode: match.brandCode, modelCode: match.modelCode }
                : localFallback;
            }),
            catchError((err) => {
              console.warn('[Provincia] Falló searchCatalog', err);
              return of(localFallback);
            }),
          );
        }

        // Ya tenemos el brandCode (ej: BAI o TOY), busquemos para ese año
        return this.getModels(brandMatch.code, anio).pipe(
          map((modelsResp) => {
            const models = modelsResp.items || [];
            console.log(`[Provincia] Modelos para ${brandMatch.code} año ${anio}:`, models.length);
            
            // Para encontrar el modelo, matcheamos el código, o el nombre entero.
            // Ej: versionCode "1180020" muchas veces sufre truncamiento -> "118020" en Provincia.
            // Para solucionar eso, podemos matchear los strings que contengan partes similares o simplemente versionCode.
            let modelMatch = models.find((item) => String(item.code) === String(params.versionCode));
            
            if (!modelMatch && params.versionCode && params.versionCode.length >= 6) {
               // Ejemplo: "1180020" -> sacamos el 3er cero -> "118020" que a veces usa Provincia
               // Funciona para códigos Infoauto de 7 dígitos donde el 5to dígito (índice 4) es 0 y solemos quitarlo.
               // Es mejor hacer algo más robusto, ej quitar el 5to caracter
               const strippedCode = params.versionCode.substring(0, 4) + params.versionCode.substring(5);
               modelMatch = models.find((item) => String(item.code) === strippedCode);
            }
            if (!modelMatch) {
               modelMatch = models.find((item) => item.name?.toUpperCase() === modelo) ||
                            models.find((item) => item.name?.toUpperCase().includes(modelo));
            }

            console.log('[Provincia] Resultado Match Modelo:', modelMatch || 'NO ENCONTRADO');

            return {
              brandCode: brandMatch.code,
              modelCode: modelMatch?.code || params.versionCode || localFallback.modelCode,
            };
          }),
          catchError((err) => {
            console.warn('[Provincia] Falló getModels', err);
            return of({ brandCode: brandMatch.code, modelCode: localFallback.modelCode });
          }),
        );
      }),
      catchError((err) => {
        console.warn('[Provincia] Falló getBrands', err);
        return of(localFallback);
      }),
    );
  }

  buildRequest(params: {
    datos: DatosCotizacion;
    vehicleCodes: { brandCode: string; modelCode: string };
  }): ProvinciaMultiQuoteRequest {

    return {
      person: {
        dni: '30111222',
        fullName: 'Cotizacion Web SegurosAlToque',
        email: 'cotizador@segurosaltoque.com',
        phone: '1130000000',
        postalCode: params.datos.localidad.codigo_postal.toString().padStart(4, '0'),
        provinceCode: '1',
        genderCode: 'X',
      },
      vehicle: {
        year: params.datos.vehiculo.anio.toString(),
        brandCode: params.vehicleCodes.brandCode,
        modelCode: params.vehicleCodes.modelCode,
        useCode: params.datos.vehiculo.uso.toString(),
        vehicleTypeCode: '1',
        isZeroKm: false,
        insuredValue: 20000000,
        accessoriesAmount: 0,
        infoAutoCode: params.datos.vehiculo.infoauto?.toString() || '',
        isNational: !params.datos.nombreVehiculo?.toUpperCase().includes('IMPORTADO'),
        vehicleNameHint: params.datos.nombreVehiculo,
        gnc: params.datos.vehiculo.gnc,
      },
      policy: {
        startDateCode: 'E',
        paymentPlanCode: '1',
        paymentMethodCode: '2',
      },
    };
  }

  private getVehicleCodes(marca?: string, modelo?: string, versionCode?: string): {
    brandCode: string;
    modelCode: string;
  } {
    const marcaKey = (marca || '').trim().toUpperCase();
    const modeloKey = (modelo || '').trim().toUpperCase();
    const brand = PROVINCIA_CATALOG[marcaKey];
    const modelCodeByName = brand?.models?.[modeloKey];

    if (brand?.code && modelCodeByName) {
      return { brandCode: brand.code, modelCode: modelCodeByName };
    }

    if (brand?.code && versionCode?.trim()) {
      // Algunos modelos de Provincia usan códigos numéricos parecidos a codInfoAuto.
      return { brandCode: brand.code, modelCode: versionCode.trim() };
    }

    if (brand?.code) {
      return { brandCode: brand.code, modelCode: PROVINCIA_DEFAULT_MODEL_CODE };
    }

    // Fallback global conocido para evitar hard-fail en aseguradora.
    return {
      brandCode: PROVINCIA_DEFAULT_BRAND_CODE,
      modelCode: PROVINCIA_DEFAULT_MODEL_CODE,
    };
  }
}
