"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaBrandsController = getProvinciaBrandsController;
exports.getProvinciaModelsController = getProvinciaModelsController;
exports.searchProvinciaCatalogController = searchProvinciaCatalogController;
exports.getSanCristobalVehicleVersionController = getSanCristobalVehicleVersionController;
const provincia_catalog_1 = require("../catalog/provincia.catalog");
const sanCristobal_auth_1 = require("../connectors/san-cristobal/sanCristobal.auth");
const sanCristobal_catalog_1 = require("../connectors/san-cristobal/sanCristobal.catalog");
const env_1 = require("../config/env");
async function getProvinciaBrandsController(_req, res, next) {
    try {
        const items = await (0, provincia_catalog_1.getProvinciaBrands)();
        res.status(200).json({
            success: true,
            items
        });
    }
    catch (error) {
        next(error);
    }
}
async function getProvinciaModelsController(req, res, next) {
    const brandCode = String(req.query.brandCode ?? "").trim();
    const anio = String(req.query.anio ?? "2024").trim();
    if (!brandCode) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param brandCode is required"
        });
        return;
    }
    try {
        const models = await (0, provincia_catalog_1.getProvinciaModels)(brandCode, anio);
        if (models === null || models.length === 0) {
            res.status(404).json({
                success: false,
                code: "CATALOG_BRAND_NOT_FOUND",
                message: `No existe catálogo para brandCode ${brandCode} y año ${anio}`
            });
            return;
        }
        res.status(200).json({
            success: true,
            brandCode: brandCode.toUpperCase(),
            items: models
        });
    }
    catch (error) {
        next(error);
    }
}
async function searchProvinciaCatalogController(req, res, next) {
    const query = String(req.query.query ?? "").trim();
    if (!query) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param query is required"
        });
        return;
    }
    try {
        const items = await (0, provincia_catalog_1.searchProvinciaCatalog)(query);
        res.status(200).json({
            success: true,
            items
        });
    }
    catch (error) {
        next(error);
    }
}
/**
 * Valida código InfoAuto + año contra el catálogo CA7 de San Cristóbal (no usa códigos marca/modelo de Provincia).
 * Query: codigoInfoauto, anio
 */
async function getSanCristobalVehicleVersionController(req, res, next) {
    const codigo = (0, sanCristobal_catalog_1.parseInfoAutoNumeric)(String(req.query.codigoInfoauto ?? ""));
    const anio = Number(String(req.query.anio ?? "").trim());
    if (codigo === undefined) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param codigoInfoauto (numérico InfoAuto) es obligatorio"
        });
        return;
    }
    if (!Number.isFinite(anio) || anio < 1980 || anio > 2100) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param anio es obligatorio y debe ser un año razonable"
        });
        return;
    }
    if (!env_1.env.sanCristobal.baseUrl || !env_1.env.sanCristobal.username || !env_1.env.sanCristobal.password) {
        res.status(503).json({
            success: false,
            code: "SC_CONFIG_MISSING",
            message: "San Cristóbal no está configurado (SC_BASE_URL / credenciales)"
        });
        return;
    }
    try {
        const token = await (0, sanCristobal_auth_1.getSanCristobalToken)();
        const rows = await (0, sanCristobal_catalog_1.fetchSanCristobalVehicleVersions)(token, anio, codigo);
        res.status(200).json({
            success: true,
            insurer: "san_cristobal",
            codigoInfoautoSolicitado: codigo,
            anio,
            count: rows.length,
            items: rows.map((r) => ({
                codigoInfoAuto: r.codigoInfoAuto,
                codigoReasignado: r.codigoReasignado,
                /** Código que usa el connector en QuoteCA7 tras validar catálogo. */
                codigoParaCotizar: (0, sanCristobal_catalog_1.effectiveInfoAutoCodeForQuote)(r) || null,
                combustibleCodigo: r.combustibleCodigo ?? null,
                categoria: r.categoria ?? null,
                importado: r.importado ?? null,
                nombreCompleto: r.nombreCompleto ?? null,
                precio: r.precio ?? null
            })),
            nota: "Provincia y San Cristóbal pueden mapear distinto el mismo vehículo; este endpoint refleja solo el criterio SC."
        });
    }
    catch (error) {
        next(error);
    }
}
