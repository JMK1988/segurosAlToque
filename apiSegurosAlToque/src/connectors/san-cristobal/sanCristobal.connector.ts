import axios from "axios";
import { env } from "../../config/env";
import { joinSanCristobalUrl } from "../../utils/sanCristobalUrl";
import { MultiQuoteRequest, NormalizedQuoteResult, QuoteConnector } from "../../types/quote.types";
import { mapSanCristobalRequest, mapSanCristobalResponse } from "./sanCristobal.mapper";
import { keysToDotnetCamelCaseJson } from "../../utils/dotnetCamelCaseJson";

import { getSanCristobalToken } from "./sanCristobal.auth";
import {
  fetchSanCristobalVehicleVersions,
  hasValidSanCristobalCatalogRow,
  isAxios5xxOrNetworkError,
  mergeSanCristobalCatalogIntoRequest,
  parseInfoAutoNumeric,
  type SanCristobalVehicleCatalogRow
} from "./sanCristobal.catalog";

function pickCatalogRow(versions: SanCristobalVehicleCatalogRow[], codigoSolicitado: number): SanCristobalVehicleCatalogRow {
  return (
    versions.find((v) => v.codigoInfoAuto === codigoSolicitado) ||
    versions.find((v) => v.codigoReasignado === codigoSolicitado) ||
    versions[0]
  );
}

export class SanCristobalConnector implements QuoteConnector {
  readonly insurer = "san_cristobal" as const;

  async quoteAuto(request: MultiQuoteRequest, traceId: string): Promise<NormalizedQuoteResult> {
    if (!env.sanCristobal.baseUrl || !env.sanCristobal.username || !env.sanCristobal.password) {
      throw Object.assign(new Error("San Cristobal env vars are missing"), { code: "SC_CONFIG_MISSING", status: 500 });
    }

    const token = await getSanCristobalToken();

    let requestForQuote = request;
    if (env.sanCristobal.vehicleLookupEnabled) {
      const codigo = parseInfoAutoNumeric(
        request.vehicle.infoAutoCode ? String(request.vehicle.infoAutoCode) : undefined
      );
      const anio = Number(request.vehicle.year) || new Date().getFullYear();
      if (codigo !== undefined) {
        try {
          const versions = await fetchSanCristobalVehicleVersions(token, anio, codigo);
          if (versions.length === 0) {
            throw Object.assign(
              new Error(
                `San Cristóbal: el código InfoAuto ${codigo} no figura en el catálogo para el año ${anio}. ` +
                  "Provincia y SC pueden usar versiones distintas; probá otra versión o desactivá SC_VEHICLE_LOOKUP_ENABLED=false para forzar el código actual."
              ),
              { code: "SC_INFOAUTO_NOT_IN_CATALOG", status: 422 }
            );
          }
          const validVersions = versions.filter(hasValidSanCristobalCatalogRow);
          if (validVersions.length === 0) {
            console.warn(
              "[SanCristobal] Catálogo devolvió filas sin CodigoInfoAuto/CodigoReasignado válidos; se cotiza sin fusionar catálogo (se mantiene el código del request)."
            );
          } else {
            requestForQuote = mergeSanCristobalCatalogIntoRequest(
              request,
              pickCatalogRow(validVersions, codigo)
            );
          }
        } catch (err) {
          if (axios.isAxiosError(err) && isAxios5xxOrNetworkError(err)) {
            console.warn(
              "[SanCristobal] Catálogo vehículo no disponible (5xx/red); se cotiza sin enriquecer códigos SC.",
              err.message
            );
          } else {
            throw err;
          }
        }
      }
    }

    const mappedRequest = mapSanCristobalRequest(requestForQuote);
    const body = (
      env.sanCristobal.quotePascalCaseJson ? mappedRequest : keysToDotnetCamelCaseJson(mappedRequest)
    ) as Record<string, unknown>;
    const quoteUrl = joinSanCristobalUrl(env.sanCristobal.baseUrl, env.sanCristobal.quotePath);

    try {
      const response = await axios.post(
        quoteUrl,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-trace-id": traceId
          },
          timeout: 45000
        }
      );
      
      return mapSanCristobalResponse(response.data as Record<string, unknown>);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        const detail =
          data === undefined || data === ""
            ? "(sin cuerpo)"
            : typeof data === "string"
              ? data
              : JSON.stringify(data);
        const urlTried = error.config?.url ?? quoteUrl;
        console.error("SanCristobal API HTTP Error:", { status, url: urlTried, detail });

        if (status === 404) {
          throw Object.assign(
            new Error(
              `San Cristóbal: 404 en ${urlTried}. La cotización QuoteCA7 no está en el OpenAPI de CA7 ` +
                `(https://api.sancristobal.com.ar/b2b-gateway/b2b-api-ca7/swagger.json); ese swagger cubre catálogo y endosos. ` +
                `Confirmá SC_QUOTE_PATH en el Swagger UI principal: https://api.sancristobal.com.ar/b2b-gateway/index.html ` +
                `(suele ser /b2b-gateway/api/Quoted/QuoteCA7). Si el login OK y el path coincide, puede faltar permiso del productor para cotizar CA7.`
            ),
            { code: "SC_QUOTE_NOT_FOUND", status: 404 }
          );
        }

        const base = error.message ?? "San Cristobal request failed";
        throw Object.assign(new Error(`${base} — ${detail}`), {
          code: error.code ?? "ERR_BAD_RESPONSE",
          status: status
        });
      }
      throw error;
    }
  }
}
