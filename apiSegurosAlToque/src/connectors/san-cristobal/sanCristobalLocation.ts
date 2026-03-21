/**
 * Códigos de provincia (Paramétricos Provincia Seguros) → jurisdicción San Cristóbal (AR_XX).
 * Si el front envía provinceCode "1" como valor por defecto incorrecto, se ignora y se infiere por CP.
 * Referencia: Documentación B2B (State: AR_02 Bs.As., AR_19 Santa Fe, etc.)
 */
const PROVINCIA_SEGUROS_TO_AR: Record<string, string> = {
  "2": "AR_02",
  "3": "AR_04",
  "4": "AR_05",
  "5": "AR_06",
  "6": "AR_03",
  "7": "AR_07",
  "8": "AR_08",
  "9": "AR_09",
  "10": "AR_10",
  "11": "AR_11",
  "12": "AR_12",
  "13": "AR_13",
  "14": "AR_14",
  "15": "AR_15",
  "16": "AR_16",
  "17": "AR_17",
  "18": "AR_18",
  "19": "AR_20",
  "20": "AR_21",
  "21": "AR_19",
  "22": "AR_22",
  "23": "AR_23",
  "24": "AR_24"
};

function parseCp4(postalCode: string): number {
  const digits = postalCode.replace(/\D/g, "").padStart(4, "0");
  const last4 = digits.slice(-4);
  const n = parseInt(last4, 10);
  return Number.isNaN(n) ? 0 : n;
}

/**
 * Inferencia por código postal argentino (4 dígitos) cuando no hay provincia confiable.
 */
export function inferArFromPostalCode(postalCode: string): string {
  const cp = parseCp4(postalCode);
  if (cp === 0) return "AR_02";

  if (cp >= 1000 && cp <= 1499) return "AR_02";
  if (cp >= 1500 && cp <= 1999) return "AR_02";

  if (cp >= 2000 && cp <= 2099) return "AR_19";
  if (cp >= 2100 && cp <= 2299) return "AR_02";
  if (cp >= 2300 && cp <= 3199) return "AR_19";
  if (cp >= 3200 && cp <= 3999) return "AR_19";

  if (cp >= 4000 && cp <= 4999) return "AR_23";
  if (cp >= 5000 && cp <= 5999) return "AR_03";

  if (cp >= 6300 && cp <= 6399) return "AR_13";
  if (cp >= 8300 && cp <= 8399) return "AR_15";

  return "AR_02";
}

export function resolveSanCristobalArState(postalCode: string, provinceCode?: string): string {
  const pc = provinceCode?.trim();
  if (pc && pc !== "1" && PROVINCIA_SEGUROS_TO_AR[pc]) {
    return PROVINCIA_SEGUROS_TO_AR[pc];
  }
  return inferArFromPostalCode(postalCode);
}
