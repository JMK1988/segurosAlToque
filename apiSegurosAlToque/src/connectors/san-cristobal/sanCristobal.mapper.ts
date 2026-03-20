import { NormalizedQuoteResult } from "../../types/quote.types";

type UnknownObject = Record<string, unknown>;

function toNumber(value: unknown): number | undefined {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    return Number.isNaN(n) ? undefined : n;
  }
  return undefined;
}

export function mapSanCristobalResponse(raw: UnknownObject): NormalizedQuoteResult {
  const plansCandidate = Array.isArray(raw.plans)
    ? raw.plans
    : Array.isArray(raw.cotizaciones)
      ? raw.cotizaciones
      : [];

  const plans = plansCandidate.map((item, index) => {
    const plan = item as UnknownObject;
    return {
      planId: String(plan.planId ?? plan.plan ?? index + 1),
      planName: String(plan.descripcion ?? plan.planName ?? "Plan"),
      description: typeof plan.descripcionAdicional === "string" ? plan.descripcionAdicional : undefined,
      monthlyPremium: toNumber(plan.premioMensual ?? plan.premio),
      annualReferencePremium: toNumber(plan.premioAnual),
      currency: String(plan.moneda ?? "ARS")
    };
  });

  return {
    insurer: "san_cristobal",
    quoteNumber: typeof raw.quoteNumber === "string" ? raw.quoteNumber : undefined,
    quoteDate: typeof raw.quoteDate === "string" ? raw.quoteDate : undefined,
    plans,
    raw
  };
}
