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

export function mapSanCristobalRequest(req: import("../../types/quote.types").MultiQuoteRequest): Record<string, unknown> {
  const isCuit = req.person.cuit && req.person.cuit.length > 0;
  
  return {
    InsuredData: {
      OfficialIDType: isCuit ? "Ext_CUIT80" : "Ext_DNI96",
      TaxID: isCuit ? req.person.cuit : req.person.dni,
      Gender: req.person.genderCode === "F" ? "F" : "M",
      ProducerCode: process.env.SC_USERNAME ? process.env.SC_USERNAME.replace("B2B_", "") : "", // Or keep the actual producer code format if needed
      Age: 30, // Or extract it if possible, but hardcoding normal for now
      UIFObligated: false
    },
    PolicyData: {
      StartDate: new Date().toISOString(),
      PolicyTermCode: "Annual", // or HalfYear
      PaymentMethodCode: "responsive", // or directDebit
      CurrencyCode: "ars",
      PaymentFees: "1",
      PolicyType: "CA7_PersonalAuto",
      Product: "CA7_PersonalAuto",
      LocationPostalCode: Number(req.person.postalCode) || 2000,
      LocationState: "AR_19" // Hardcoded AR_19 Santa Fe for now, ideally maps from provinceCode
    },
    VehicleData: {
      Vehicle: {
        AutomaticAdjust: 10,
        Category: "1", // Auto standard
        Color: "001",
        FuelType: "1",
        HasGNC: false,
        HasGPS: false,
        InfoautoCode: req.vehicle.infoAutoCode || req.vehicle.modelCode, // Here the infoauto!
        Is0Km: req.vehicle.isZeroKm || false,
        StatedAmount: req.vehicle.insuredValue || 20000000,
        Usage: "1", // particular
        Year: Number(req.vehicle.year) || new Date().getFullYear(),
        IsNational: true, 
        RiskLocationPostalCode: Number(req.person.postalCode) || 2000,
        RiskLocationState: "AR_19"
      }
    }
  };
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
