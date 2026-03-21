import axios from "axios";
import { env } from "../../config/env";
import { joinSanCristobalUrl } from "../../utils/sanCristobalUrl";
import type { MultiQuoteRequest } from "../../types/quote.types";

/** Fila normalizada (acepta JSON Pascal o camel desde SC). */
export type SanCristobalVehicleCatalogRow = {
  codigoInfoAuto?: number;
  codigoReasignado?: number;
  combustibleCodigo?: string;
  categoria?: string;
  importado?: boolean;
  nombreCompleto?: string;
  precio?: number;
};

function num(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function str(v: unknown): string | undefined {
  if (typeof v === "string" && v.trim() !== "") return v.trim();
  return undefined;
}

function bool(v: unknown): boolean | undefined {
  if (typeof v === "boolean") return v;
  return undefined;
}

export function normalizeVehicleCatalogRow(raw: Record<string, unknown>): SanCristobalVehicleCatalogRow {
  return {
    codigoInfoAuto: num(raw.CodigoInfoAuto ?? raw.codigoInfoAuto),
    codigoReasignado: num(raw.CodigoReasignado ?? raw.codigoReasignado),
    combustibleCodigo: str(raw.CombustibleCodigo ?? raw.combustibleCodigo),
    categoria: str(raw.Categoria ?? raw.categoria),
    importado: bool(raw.Importado ?? raw.importado),
    nombreCompleto: str(raw.NombreCompleto ?? raw.nombreCompleto),
    precio: num(raw.Precio ?? raw.precio)
  };
}

/** Código InfoAuto numérico para consultar el catálogo SC (no es brand/model de Provincia). */
export function parseInfoAutoNumeric(code: string | undefined): number | undefined {
  if (!code) return undefined;
  const t = String(code).trim();
  const direct = Number.parseInt(t, 10);
  if (Number.isFinite(direct) && direct > 0) return direct;
  const digits = t.replace(/\D/g, "");
  if (!digits) return undefined;
  const n = Number.parseInt(digits, 10);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

/**
 * Código a enviar en QuoteCA7: si SC reasignó, usar ese; si no, el canónico del catálogo.
 */
export function effectiveInfoAutoCodeForQuote(row: SanCristobalVehicleCatalogRow): string {
  const re = row.codigoReasignado;
  if (typeof re === "number" && re > 0) return String(Math.trunc(re));
  const ia = row.codigoInfoAuto;
  if (typeof ia === "number" && ia > 0) return String(Math.trunc(ia));
  return "";
}

/** UAT a veces devuelve 200 con filas placeholder (CodigoInfoAuto/CodigoReasignado en 0); no sirven para QuoteCA7. */
export function hasValidSanCristobalCatalogRow(row: SanCristobalVehicleCatalogRow): boolean {
  return effectiveInfoAutoCodeForQuote(row) !== "";
}

/** Categoría SC: solo si parece código de typelist (evita descripciones largas). */
function scCategoryAsTypelistCode(categoria: string | undefined): string | undefined {
  if (!categoria) return undefined;
  if (categoria.length > 40) return undefined;
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(categoria)) return undefined;
  return categoria;
}

/**
 * Copia del request con códigos alineados al catálogo SC (InfoAuto + combustible/categoría/importado si vienen).
 */
export function mergeSanCristobalCatalogIntoRequest(
  req: MultiQuoteRequest,
  row: SanCristobalVehicleCatalogRow
): MultiQuoteRequest {
  const info = effectiveInfoAutoCodeForQuote(row);
  const cat = scCategoryAsTypelistCode(row.categoria);
  const fuel = row.combustibleCodigo?.trim();

  const vehicle = { ...req.vehicle };
  if (info) vehicle.infoAutoCode = info;
  if (fuel) vehicle.fuelTypeCode = fuel;
  if (cat) vehicle.categoryCode = cat;
  if (row.importado === true) vehicle.isNational = false;
  else if (row.importado === false) vehicle.isNational = true;

  return { ...req, vehicle };
}

function catalogHeaders(token: string): Record<string, string> {
  const h: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json"
  };
  const app = env.sanCristobal.clientAppHeader.trim();
  if (app) h["X-Client-App"] = app;
  return h;
}

/**
 * GET catálogo SC por código InfoAuto + año (mismo criterio que la documentación CA7).
 */
export async function fetchSanCristobalVehicleVersions(
  token: string,
  anio: number,
  codigoInfoauto: number
): Promise<SanCristobalVehicleCatalogRow[]> {
  const path = env.sanCristobal.vehicleLookupPath.startsWith("/")
    ? env.sanCristobal.vehicleLookupPath
    : `/${env.sanCristobal.vehicleLookupPath}`;
  const url = joinSanCristobalUrl(env.sanCristobal.baseUrl, path);
  const res = await axios.get<Record<string, unknown>>(url, {
    params: { anio, codigoInfoauto },
    headers: catalogHeaders(token),
    timeout: 30000,
    validateStatus: (s) => s === 200 || s === 404
  });

  if (res.status === 404) return [];

  const data = res.data;
  const rawList = (data.Versiones ?? data.versiones) as unknown[] | undefined;
  if (!Array.isArray(rawList)) return [];

  return rawList
    .filter((x): x is Record<string, unknown> => typeof x === "object" && x !== null)
    .map((x) => normalizeVehicleCatalogRow(x));
}

export function isAxios5xxOrNetworkError(err: unknown): boolean {
  const e = err as { code?: string; response?: { status?: number } };
  if (e?.code === "ECONNABORTED" || e?.code === "ENOTFOUND" || e?.code === "ECONNREFUSED") return true;
  const s = e?.response?.status;
  return typeof s === "number" && s >= 500;
}
