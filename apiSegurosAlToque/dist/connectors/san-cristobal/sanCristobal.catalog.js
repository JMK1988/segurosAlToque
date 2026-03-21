"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeVehicleCatalogRow = normalizeVehicleCatalogRow;
exports.parseInfoAutoNumeric = parseInfoAutoNumeric;
exports.effectiveInfoAutoCodeForQuote = effectiveInfoAutoCodeForQuote;
exports.mergeSanCristobalCatalogIntoRequest = mergeSanCristobalCatalogIntoRequest;
exports.fetchSanCristobalVehicleVersions = fetchSanCristobalVehicleVersions;
exports.isAxios5xxOrNetworkError = isAxios5xxOrNetworkError;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const sanCristobalUrl_1 = require("../../utils/sanCristobalUrl");
function num(v) {
    if (typeof v === "number" && Number.isFinite(v))
        return v;
    if (typeof v === "string" && v.trim() !== "") {
        const n = Number(v);
        return Number.isFinite(n) ? n : undefined;
    }
    return undefined;
}
function str(v) {
    if (typeof v === "string" && v.trim() !== "")
        return v.trim();
    return undefined;
}
function bool(v) {
    if (typeof v === "boolean")
        return v;
    return undefined;
}
function normalizeVehicleCatalogRow(raw) {
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
function parseInfoAutoNumeric(code) {
    if (!code)
        return undefined;
    const t = String(code).trim();
    const direct = Number.parseInt(t, 10);
    if (Number.isFinite(direct) && direct > 0)
        return direct;
    const digits = t.replace(/\D/g, "");
    if (!digits)
        return undefined;
    const n = Number.parseInt(digits, 10);
    return Number.isFinite(n) && n > 0 ? n : undefined;
}
/**
 * Código a enviar en QuoteCA7: si SC reasignó, usar ese; si no, el canónico del catálogo.
 */
function effectiveInfoAutoCodeForQuote(row) {
    const re = row.codigoReasignado;
    if (typeof re === "number" && re > 0)
        return String(Math.trunc(re));
    const ia = row.codigoInfoAuto;
    if (typeof ia === "number" && ia > 0)
        return String(Math.trunc(ia));
    return "";
}
/** Categoría SC: solo si parece código de typelist (evita descripciones largas). */
function scCategoryAsTypelistCode(categoria) {
    if (!categoria)
        return undefined;
    if (categoria.length > 40)
        return undefined;
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(categoria))
        return undefined;
    return categoria;
}
/**
 * Copia del request con códigos alineados al catálogo SC (InfoAuto + combustible/categoría/importado si vienen).
 */
function mergeSanCristobalCatalogIntoRequest(req, row) {
    const info = effectiveInfoAutoCodeForQuote(row);
    const cat = scCategoryAsTypelistCode(row.categoria);
    const fuel = row.combustibleCodigo?.trim();
    const vehicle = { ...req.vehicle };
    if (info)
        vehicle.infoAutoCode = info;
    if (fuel)
        vehicle.fuelTypeCode = fuel;
    if (cat)
        vehicle.categoryCode = cat;
    if (row.importado === true)
        vehicle.isNational = false;
    else if (row.importado === false)
        vehicle.isNational = true;
    return { ...req, vehicle };
}
function catalogHeaders(token) {
    const h = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
    };
    const app = env_1.env.sanCristobal.clientAppHeader.trim();
    if (app)
        h["X-Client-App"] = app;
    return h;
}
/**
 * GET catálogo SC por código InfoAuto + año (mismo criterio que la documentación CA7).
 */
async function fetchSanCristobalVehicleVersions(token, anio, codigoInfoauto) {
    const path = env_1.env.sanCristobal.vehicleLookupPath.startsWith("/")
        ? env_1.env.sanCristobal.vehicleLookupPath
        : `/${env_1.env.sanCristobal.vehicleLookupPath}`;
    const url = (0, sanCristobalUrl_1.joinSanCristobalUrl)(env_1.env.sanCristobal.baseUrl, path);
    const res = await axios_1.default.get(url, {
        params: { anio, codigoInfoauto },
        headers: catalogHeaders(token),
        timeout: 30000,
        validateStatus: (s) => s === 200 || s === 404
    });
    if (res.status === 404)
        return [];
    const data = res.data;
    const rawList = (data.Versiones ?? data.versiones);
    if (!Array.isArray(rawList))
        return [];
    return rawList
        .filter((x) => typeof x === "object" && x !== null)
        .map((x) => normalizeVehicleCatalogRow(x));
}
function isAxios5xxOrNetworkError(err) {
    const e = err;
    if (e?.code === "ECONNABORTED" || e?.code === "ENOTFOUND" || e?.code === "ECONNREFUSED")
        return true;
    const s = e?.response?.status;
    return typeof s === "number" && s >= 500;
}
