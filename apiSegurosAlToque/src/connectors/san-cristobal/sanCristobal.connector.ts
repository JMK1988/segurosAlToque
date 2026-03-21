import axios from "axios";
import { env } from "../../config/env";
import { MultiQuoteRequest, NormalizedQuoteResult, QuoteConnector } from "../../types/quote.types";
import { mapSanCristobalRequest, mapSanCristobalResponse } from "./sanCristobal.mapper";

import { getSanCristobalToken } from "./sanCristobal.auth";

export class SanCristobalConnector implements QuoteConnector {
  readonly insurer = "san_cristobal" as const;

  async quoteAuto(request: MultiQuoteRequest, traceId: string): Promise<NormalizedQuoteResult> {
    if (!env.sanCristobal.baseUrl || !env.sanCristobal.username || !env.sanCristobal.password) {
      throw Object.assign(new Error("San Cristobal env vars are missing"), { code: "SC_CONFIG_MISSING", status: 500 });
    }

    const token = await getSanCristobalToken();

    const mappedRequest = mapSanCristobalRequest(request);

    try {
      const response = await axios.post(
        `${env.sanCristobal.baseUrl}${env.sanCristobal.quotePath}`,
        mappedRequest,
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
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.error("SanCristobal API HTTP Error Data:", JSON.stringify(error.response.data, null, 2));
      } else {
        console.error("SanCristobal Error:", error.message);
      }
      throw error;
    }
  }
}
