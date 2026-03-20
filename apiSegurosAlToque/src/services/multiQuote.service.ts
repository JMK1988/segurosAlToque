import { ProvinciaConnector } from "../connectors/provincia/provincia.connector";
import { SanCristobalConnector } from "../connectors/san-cristobal/sanCristobal.connector";
import { env } from "../config/env";
import { MultiQuoteRequest, MultiQuoteResponse, QuoteConnector } from "../types/quote.types";

function getActiveConnectors(): QuoteConnector[] {
  const activeConnectors: QuoteConnector[] = [new ProvinciaConnector()];
  const token = env.sanCristobal.authToken.trim();
  const hasRealToken = token.length > 0 && !token.startsWith("<");

  // Keep San Cristobal optional while credentials are pending.
  if (env.sanCristobal.baseUrl && hasRealToken) {
    activeConnectors.push(new SanCristobalConnector());
  }

  return activeConnectors;
}

export async function quoteAutoMulti(request: MultiQuoteRequest, traceId: string): Promise<MultiQuoteResponse> {
  const connectors = getActiveConnectors();
  const settled = await Promise.allSettled(
    connectors.map((connector) => connector.quoteAuto(request, traceId))
  );

  const results: MultiQuoteResponse["results"] = [];
  const errors: MultiQuoteResponse["errors"] = [];

  settled.forEach((entry, idx) => {
    const insurer = connectors[idx].insurer;
    if (entry.status === "fulfilled") {
      results.push(entry.value);
      return;
    }

    const reason = entry.reason as { message?: string; code?: string };
    errors.push({
      insurer,
      code: reason.code ?? "QUOTE_FAILED",
      message: reason.message ?? "Unknown error"
    });
  });

  return {
    traceId,
    success: results.length > 0,
    results,
    errors
  };
}
