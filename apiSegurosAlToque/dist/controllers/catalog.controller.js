"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaBrandsController = getProvinciaBrandsController;
exports.getProvinciaModelsController = getProvinciaModelsController;
exports.searchProvinciaCatalogController = searchProvinciaCatalogController;
const provincia_catalog_1 = require("../catalog/provincia.catalog");
function getProvinciaBrandsController(_req, res) {
    res.status(200).json({
        success: true,
        items: (0, provincia_catalog_1.getProvinciaBrands)()
    });
}
function getProvinciaModelsController(req, res) {
    const brandCode = String(req.query.brandCode ?? "").trim();
    if (!brandCode) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param brandCode is required"
        });
        return;
    }
    const models = (0, provincia_catalog_1.getProvinciaModels)(brandCode);
    if (models === null) {
        res.status(404).json({
            success: false,
            code: "CATALOG_BRAND_NOT_FOUND",
            message: `No existe catálogo para brandCode ${brandCode}`
        });
        return;
    }
    res.status(200).json({
        success: true,
        brandCode: brandCode.toUpperCase(),
        items: models
    });
}
function searchProvinciaCatalogController(req, res) {
    const query = String(req.query.query ?? "").trim();
    if (!query) {
        res.status(400).json({
            success: false,
            code: "CATALOG_VALIDATION_ERROR",
            message: "Query param query is required"
        });
        return;
    }
    res.status(200).json({
        success: true,
        items: (0, provincia_catalog_1.searchProvinciaCatalog)(query)
    });
}
