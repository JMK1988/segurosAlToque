import type { MultiQuoteRequest } from "../../types/quote.types";

/**
 * Códigos del TypeList Usage (B2B). useCode del front: 1 = particular, 2 = comercial (InfoAuto / flujo común).
 */
export function resolveScUsage(useCode: string): string {
  const u = useCode.trim();
  if (u === "2") return "Comercial";
  return "Personal";
}

/**
 * TypeList Categories — por defecto automóvil; 4x4/SUV/pickup se infieren del nombre si no viene código.
 */
export function resolveScCategory(req: MultiQuoteRequest): string {
  const explicit = req.vehicle.categoryCode?.trim();
  if (explicit) return explicit;

  const n = (req.vehicle.vehicleNameHint || "").toUpperCase();
  // Pickups / utilitarios antes que 4x4 genérico (ej. HILUX 4X4 → pickup doble cabina).
  if (/\bPICK\s*UP|PICKUP|RANGER|HILUX|AMAROK|FRONTIER|TORNADO\b/i.test(n)) return "DoubleCabPickup";
  if (/\b4X4\b|4WD|CUATRO\s*X\s*CUATRO/i.test(n)) return "Car4x4";
  if (/\bSUV\b|CROSSOVER|SW4|COMPASS|TAOS|TIGUAN\b/i.test(n)) return "Car4x4";

  const vt = req.vehicle.vehicleTypeCode?.trim();
  if (vt && vt !== "1" && /^[A-Za-z]/.test(vt)) {
    return vt;
  }

  return "Car";
}

/**
 * TypeList FuelTypes: NAF, DIE, ELE, HIB, WOF
 */
export function resolveScFuelType(req: MultiQuoteRequest): string {
  const explicit = req.vehicle.fuelTypeCode?.trim();
  if (explicit) return explicit;

  const n = (req.vehicle.vehicleNameHint || "").toUpperCase();
  if (n.includes("HÍBRIDO") || n.includes("HIBRIDO") || n.includes("HYBRID")) return "HIB";
  if (n.includes("ELÉCTRIC") || n.includes("ELECTRIC")) return "ELE";
  if (n.includes("DIESEL") || n.includes("TDI") || n.includes("TDCI")) return "DIE";

  return "NAF";
}

/** TypeList Colors */
export function resolveScColor(req: MultiQuoteRequest): string {
  return req.vehicle.colorCode?.trim() || "White";
}

/**
 * TypeList AutomaticAdjustVehicles — código numérico como en catálogo (ej. 10 = 10%).
 */
export function resolveScAutomaticAdjust(req: MultiQuoteRequest): number {
  const raw = req.vehicle.automaticAdjustPercent;
  if (raw !== undefined && raw !== null && String(raw).trim() !== "") {
    const n = Number(raw);
    if (Number.isFinite(n)) return n;
  }
  return 10;
}
