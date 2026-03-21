"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaBrandsController = getProvinciaBrandsController;
exports.getProvinciaModelsController = getProvinciaModelsController;
exports.searchProvinciaCatalogController = searchProvinciaCatalogController;
const provincia_catalog_1 = require("../catalog/provincia.catalog");
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
