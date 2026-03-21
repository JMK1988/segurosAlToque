import { env } from "../../config/env";
import { NormalizedQuoteResult } from "../../types/quote.types";
import { resolveSanCristobalArState } from "./sanCristobalLocation";
import {
  resolveScAutomaticAdjust,
  resolveScCategory,
  resolveScColor,
  resolveScFuelType,
  resolveScUsage
} from "./sanCristobalVehicleCodes";

function ca7VehicleProducts(): { ProductCode: string }[] {
  const raw = env.sanCristobal.ca7OfferingCodes;
  const codes = raw
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  const list = codes.length > 0 ? codes : ["CA7_Basic"];
  return list.map((ProductCode) => ({ ProductCode }));
}

type UnknownObject = Record<string, unknown>;

function toNumber(value: unknown): number | undefined {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    return Number.isNaN(n) ? undefined : n;
  }
  return undefined;
}

function pickMonetaryAmount(
  src: UnknownObject | undefined,
  keys: [string, string]
): UnknownObject | undefined {
  if (!src) return undefined;
  const a = src[keys[0]] ?? src[keys[1]];
  return typeof a === "object" && a !== null ? (a as UnknownObject) : undefined;
}

function pickSummaries(raw: UnknownObject): unknown[] | undefined {
  const r = raw as Record<string, unknown>;
  if (Array.isArray(r.Summaries)) return r.Summaries;
  if (Array.isArray(r.summaries)) return r.summaries;
  const data = r.data ?? r.Data;
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    if (Array.isArray(d.Summaries)) return d.Summaries;
    if (Array.isArray(d.summaries)) return d.summaries;
  }
  return undefined;
}

/** Código de productor: sin prefijo B2B_; si queda vacío, se usa el usuario completo. */
function resolveProducerCode(): string {
  const u = env.sanCristobal.username.trim();
  if (!u) return "";
  const stripped = u.replace(/^B2B_/i, "").trim();
  return stripped.length > 0 ? stripped : u;
}

export function mapSanCristobalRequest(req: import("../../types/quote.types").MultiQuoteRequest): Record<string, unknown> {
  const isCuit = req.person.cuit && req.person.cuit.length > 0;
  const infoauto =
    (req.vehicle.infoAutoCode && String(req.vehicle.infoAutoCode).trim()) || String(req.vehicle.modelCode).trim();
  const arState = resolveSanCristobalArState(req.person.postalCode, req.person.provinceCode);
  const postalNum = Number(req.person.postalCode) || 2000;
  const isNational = req.vehicle.isNational ?? true;
  const producer = resolveProducerCode();
  const policyProduct = env.sanCristobal.ca7PolicyProduct.trim() || "CA7CommAuto";

  const usage = resolveScUsage(req.vehicle.useCode);
  const category = resolveScCategory(req);
  const color = resolveScColor(req);
  const fuelType = resolveScFuelType(req);
  const automaticAdjust = resolveScAutomaticAdjust(req);
  const hasGnc = req.vehicle.gnc === true;

  return {
    InsuredData: {
      OfficialIDType: isCuit ? "Ext_CUIT80" : "Ext_DNI96",
      TaxID: isCuit ? req.person.cuit : req.person.dni,
      Gender: req.person.genderCode === "F" ? "F" : "M",
      ProducerCode: producer || env.sanCristobal.username.trim(),
      Age: 30,
      // Swagger B2BApp Quoted InsuredData: "UIFObligated" (no "UifObligated"). camelCase → uIFObligated.
      UIFObligated: false
    },
    PolicyData: {
      StartDate: new Date().toISOString(),
      PolicyTermCode: "Annual",
      PaymentMethodCode: "responsive",
      CurrencyCode: "ARS",
      PaymentFees: "1",
      CommercialAlternative: "10",
      PolicyType: policyProduct,
      Product: policyProduct,
      LocationPostalCode: postalNum,
      LocationState: arState
    },
    VehicleData: {
      Vehicle: {
        AccesoryAmount: req.vehicle.accessoriesAmount ?? 0,
        AutomaticAdjust: automaticAdjust,
        Category: category,
        Color: color,
        FuelType: fuelType,
        HasGNC: hasGnc,
        HasGPS: false,
        // CA7 VehicleInfo (swagger): "InfoautoCode" → JSON infoautoCode. No usar InfoAutoCode (infoAutoCode no mapea y el servidor NRE).
        InfoautoCode: infoauto,
        Is0Km: req.vehicle.isZeroKm || false,
        StatedAmount: req.vehicle.insuredValue || 20000000,
        Usage: usage,
        Year: Number(req.vehicle.year) || new Date().getFullYear(),
        IsNational: isNational,
        RiskLocationPostalCode: postalNum,
        RiskLocationState: arState
      },
      Product: ca7VehicleProducts()
    }
  };
}

export function mapSanCristobalResponse(raw: UnknownObject): NormalizedQuoteResult {
  const summaries = pickSummaries(raw);

  if (Array.isArray(summaries) && summaries.length > 0) {
    const plans = summaries.map((item, index) => {
      const s = item as UnknownObject;
      const productCode = String(s.ProductCode ?? s.productCode ?? `plan-${index + 1}`);
      const offering = String(s.ProductOffering ?? s.productOffering ?? productCode);
      const tp = pickMonetaryAmount(s, ["TotalPremium", "totalPremium"]);
      const amount = toNumber(tp?.Amount ?? tp?.amount);
      const currency = String(tp?.Currency ?? tp?.currency ?? "ARS");
      const desc = String(s.DeductibleTypeDescription ?? s.deductibleTypeDescription ?? "");
      const annual = amount;
      const monthly =
        annual !== undefined && annual > 0 && Number.isFinite(annual) ? annual / 12 : undefined;

      return {
        planId: productCode,
        planName: offering,
        description: desc || undefined,
        monthlyPremium: monthly,
        annualReferencePremium: annual,
        currency
      };
    });

    const first = summaries[0] as UnknownObject;
    const qid = first.QuoteId ?? first.quoteId;

    return {
      insurer: "san_cristobal",
      quoteNumber: qid !== undefined && qid !== null ? String(qid) : undefined,
      quoteDate: undefined,
      plans,
      raw
    };
  }

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
