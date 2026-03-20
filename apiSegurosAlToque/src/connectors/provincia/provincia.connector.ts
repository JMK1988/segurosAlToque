import axios, { AxiosError } from "axios";
import { env } from "../../config/env";
import { MultiQuoteRequest, NormalizedQuoteResult, QuoteConnector } from "../../types/quote.types";
import { getProvinciaToken } from "./provincia.auth";
import { mapProvinciaResponse, mapToProvinciaRequest } from "./provincia.mapper";

export class ProvinciaConnector implements QuoteConnector {
  readonly insurer = "provincia" as const;

  async quoteAuto(request: MultiQuoteRequest, traceId: string): Promise<NormalizedQuoteResult> {
    const token = await getProvinciaToken();
    const payload = mapToProvinciaRequest(request);

    try {
      const response = await axios.post(
        `${env.provincia.quoteUrl}?apikey=${encodeURIComponent(env.provincia.apiKey)}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-trace-id": traceId
          },
          timeout: 30000
        }
      );

      return mapProvinciaResponse(response.data);
    } catch (err) {
      const axiosErr = err as AxiosError<{ message?: string; status?: string }>;
      const httpStatus = axiosErr.response?.status;
      const remoteMsg = axiosErr.response?.data?.message;

      if (httpStatus === 404) {
        const error = new Error(
          "Provincia: el vehículo no está disponible en el nomenclador de la aseguradora."
        ) as Error & { code: string };
        error.code = "ERR_VEHICLE_NOT_FOUND";
        throw error;
      }

      if (httpStatus === 401 || httpStatus === 403) {
        const error = new Error("Provincia: credenciales inválidas o sesión expirada.") as Error & { code: string };
        error.code = "ERR_UNAUTHORIZED";
        throw error;
      }

      if (httpStatus === 400) {
        const error = new Error(
          remoteMsg ?? "Provincia: datos de cotización inválidos."
        ) as Error & { code: string };
        error.code = "ERR_BAD_REQUEST";
        throw error;
      }

      const error = new Error(
        remoteMsg ?? axiosErr.message ?? "Provincia: error desconocido al cotizar."
      ) as Error & { code: string };
      error.code = `ERR_HTTP_${httpStatus ?? "UNKNOWN"}`;
      throw error;
    }
  }
}
