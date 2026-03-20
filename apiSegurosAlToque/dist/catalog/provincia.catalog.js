"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaBrands = getProvinciaBrands;
exports.getProvinciaModels = getProvinciaModels;
exports.searchProvinciaCatalog = searchProvinciaCatalog;
// Initial in-memory catalog.
// This can be replaced with a live sync from Provincia parametric services.
const catalog = [
    {
        brand: { code: "TOY", name: "TOYOTA" },
        models: [{ code: "045307", name: "ETIOS 1.5 XLS 5P" }]
    },
    {
        brand: { code: "REN", name: "RENAULT" },
        models: []
    }
];
function getProvinciaBrands() {
    return catalog.map((x) => x.brand);
}
function getProvinciaModels(brandCode) {
    const found = catalog.find((x) => x.brand.code.toUpperCase() === brandCode.toUpperCase());
    if (!found) {
        return null;
    }
    return found.models;
}
function searchProvinciaCatalog(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return [];
    }
    const results = [];
    catalog.forEach((record) => {
        record.models.forEach((model) => {
            const haystack = `${record.brand.name} ${model.name} ${model.code}`.toLowerCase();
            if (haystack.includes(normalized)) {
                results.push({
                    brandCode: record.brand.code,
                    brandName: record.brand.name,
                    modelCode: model.code,
                    modelName: model.name
                });
            }
        });
    });
    return results;
}
