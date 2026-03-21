import { ProvinciaConnector } from "../connectors/provincia/provincia.connector";
import { SanCristobalConnector } from "../connectors/san-cristobal/sanCristobal.connector";
import { env } from "../config/env";
import { MultiQuoteRequest, MultiQuoteResponse, QuoteConnector } from "../types/quote.types";

function getActiveConnectors(): QuoteConnector[] {
  const activeConnectors: QuoteConnector[] = [new ProvinciaConnector()];
  const user = env.sanCristobal.username.trim();
  const pwd = env.sanCristobal.password;
  const hasCredentials = user.length > 0 && !user.startsWith("YOUR_");

  // Keep San Cristobal optional while credentials are pending.
  if (env.sanCristobal.baseUrl && hasCredentials) {
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
