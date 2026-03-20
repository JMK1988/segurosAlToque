import axios from "axios";
import { env } from "../../config/env";
import { MultiQuoteRequest, NormalizedQuoteResult, QuoteConnector } from "../../types/quote.types";
import { mapSanCristobalResponse } from "./sanCristobal.mapper";

export class SanCristobalConnector implements QuoteConnector {
  readonly insurer = "san_cristobal" as const;

  async quoteAuto(request: MultiQuoteRequest, traceId: string): Promise<NormalizedQuoteResult> {
    if (!env.sanCristobal.baseUrl || !env.sanCristobal.authToken) {
      throw Object.assign(new Error("San Cristobal env vars are missing"), { code: "SC_CONFIG_MISSING", status: 500 });
    }

    const response = await axios.post(
      `${env.sanCristobal.baseUrl}${env.sanCristobal.quotePath}`,
      request,
      {
        headers: {
          Authorization: `Bearer ${env.sanCristobal.authToken}`,
          "Content-Type": "application/json",
          "x-trace-id": traceId
        },
        timeout: 30000
      }
    );

    return mapSanCristobalResponse(response.data as Record<string, unknown>);
  }
}
