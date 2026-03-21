"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanCristobalConnector = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const sanCristobalUrl_1 = require("../../utils/sanCristobalUrl");
const sanCristobal_mapper_1 = require("./sanCristobal.mapper");
const dotnetCamelCaseJson_1 = require("../../utils/dotnetCamelCaseJson");
const sanCristobal_auth_1 = require("./sanCristobal.auth");
const sanCristobal_catalog_1 = require("./sanCristobal.catalog");
function pickCatalogRow(versions, codigoSolicitado) {
    return (versions.find((v) => v.codigoInfoAuto === codigoSolicitado) ||
        versions.find((v) => v.codigoReasignado === codigoSolicitado) ||
        versions[0]);
}
class SanCristobalConnector {
    constructor() {
        this.insurer = "san_cristobal";
    }
    async quoteAuto(request, traceId) {
        if (!env_1.env.sanCristobal.baseUrl || !env_1.env.sanCristobal.username || !env_1.env.sanCristobal.password) {
            throw Object.assign(new Error("San Cristobal env vars are missing"), { code: "SC_CONFIG_MISSING", status: 500 });
        }
        const token = await (0, sanCristobal_auth_1.getSanCristobalToken)();
        let requestForQuote = request;
        if (env_1.env.sanCristobal.vehicleLookupEnabled) {
            const codigo = (0, sanCristobal_catalog_1.parseInfoAutoNumeric)(request.vehicle.infoAutoCode ? String(request.vehicle.infoAutoCode) : undefined);
            const anio = Number(request.vehicle.year) || new Date().getFullYear();
            if (codigo !== undefined) {
                try {
                    const versions = await (0, sanCristobal_catalog_1.fetchSanCristobalVehicleVersions)(token, anio, codigo);
                    if (versions.length === 0) {
                        throw Object.assign(new Error(`San Cristóbal: el código InfoAuto ${codigo} no figura en el catálogo para el año ${anio}. ` +
                            "Provincia y SC pueden usar versiones distintas; probá otra versión o desactivá SC_VEHICLE_LOOKUP_ENABLED=false para forzar el código actual."), { code: "SC_INFOAUTO_NOT_IN_CATALOG", status: 422 });
                    }
                    requestForQuote = (0, sanCristobal_catalog_1.mergeSanCristobalCatalogIntoRequest)(request, pickCatalogRow(versions, codigo));
                }
                catch (err) {
                    if (axios_1.default.isAxiosError(err) && (0, sanCristobal_catalog_1.isAxios5xxOrNetworkError)(err)) {
                        console.warn("[SanCristobal] Catálogo vehículo no disponible (5xx/red); se cotiza sin enriquecer códigos SC.", err.message);
                    }
                    else {
                        throw err;
                    }
                }
            }
        }
        const mappedRequest = (0, sanCristobal_mapper_1.mapSanCristobalRequest)(requestForQuote);
        const body = (env_1.env.sanCristobal.quotePascalCaseJson ? mappedRequest : (0, dotnetCamelCaseJson_1.keysToDotnetCamelCaseJson)(mappedRequest));
        const quoteUrl = (0, sanCristobalUrl_1.joinSanCristobalUrl)(env_1.env.sanCristobal.baseUrl, env_1.env.sanCristobal.quotePath);
        try {
            const response = await axios_1.default.post(quoteUrl, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "x-trace-id": traceId
                },
                timeout: 45000
            });
            return (0, sanCristobal_mapper_1.mapSanCristobalResponse)(response.data);
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                const status = error.response?.status;
                const data = error.response?.data;
                const detail = data === undefined || data === ""
                    ? "(sin cuerpo)"
                    : typeof data === "string"
                        ? data
                        : JSON.stringify(data);
                const urlTried = error.config?.url ?? quoteUrl;
                console.error("SanCristobal API HTTP Error:", { status, url: urlTried, detail });
                if (status === 404) {
                    throw Object.assign(new Error(`San Cristóbal: 404 en ${urlTried}. La cotización QuoteCA7 no está en el OpenAPI de CA7 ` +
                        `(https://api.sancristobal.com.ar/b2b-gateway/b2b-api-ca7/swagger.json); ese swagger cubre catálogo y endosos. ` +
                        `Confirmá SC_QUOTE_PATH en el Swagger UI principal: https://api.sancristobal.com.ar/b2b-gateway/index.html ` +
                        `(suele ser /b2b-gateway/api/Quoted/QuoteCA7). Si el login OK y el path coincide, puede faltar permiso del productor para cotizar CA7.`), { code: "SC_QUOTE_NOT_FOUND", status: 404 });
                }
                const base = error.message ?? "San Cristobal request failed";
                throw Object.assign(new Error(`${base} — ${detail}`), {
                    code: error.code ?? "ERR_BAD_RESPONSE",
                    status: status
                });
            }
            throw error;
        }
    }
}
exports.SanCristobalConnector = SanCristobalConnector;
