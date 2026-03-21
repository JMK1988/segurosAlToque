"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaBrands = getProvinciaBrands;
exports.getProvinciaModels = getProvinciaModels;
exports.searchProvinciaCatalog = searchProvinciaCatalog;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
const provincia_auth_1 = require("../connectors/provincia/provincia.auth");
async function getProvinciaBrands() {
    const token = await (0, provincia_auth_1.getProvinciaToken)();
    const res = await axios_1.default.get(`https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/valores/marcas/4/04100?apikey=${env_1.env.provincia.apiKey}`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data.map((item) => ({
        code: item.codigo,
        name: item.descripcion
    }));
}
async function getProvinciaModels(brandCode, anio = "2024") {
    const token = await (0, provincia_auth_1.getProvinciaToken)();
    try {
        const res = await axios_1.default.get(`https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/valores/modelo/4/04100/${brandCode}/${anio}/N?apikey=${env_1.env.provincia.apiKey}`, { headers: { Authorization: `Bearer ${token}` } });
        return res.data.map((item) => ({
            code: item.codigo,
            name: item.descripcion
        }));
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error) && error.response?.status === 500) {
            // Provincia devuelve 500 cuando el año no existe para esa marca, probamos un fallback genérico a un año anterior si queremos,
            // pero simplemente devolvemos vacío para que actúe el fallback local del frontend.
            return [];
        }
        throw error;
    }
}
async function searchProvinciaCatalog(query) {
    // Sin la tabla de base de datos en memoria completa, esta búsqueda global ya no se puede hacer sin traer todo
    // El frontend no lo necesita tanto si tiene el pipe de brands -> models
    return [];
}
