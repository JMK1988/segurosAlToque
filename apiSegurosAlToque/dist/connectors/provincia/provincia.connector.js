"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinciaConnector = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const provincia_auth_1 = require("./provincia.auth");
const provincia_mapper_1 = require("./provincia.mapper");
class ProvinciaConnector {
    constructor() {
        this.insurer = "provincia";
    }
    async quoteAuto(request, traceId) {
        const token = await (0, provincia_auth_1.getProvinciaToken)();
        const payload = (0, provincia_mapper_1.mapToProvinciaRequest)(request);
        try {
            const response = await axios_1.default.post(`${env_1.env.provincia.quoteUrl}?apikey=${encodeURIComponent(env_1.env.provincia.apiKey)}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "x-trace-id": traceId
                },
                timeout: 30000
            });
            return (0, provincia_mapper_1.mapProvinciaResponse)(response.data);
        }
        catch (err) {
            const axiosErr = err;
            const httpStatus = axiosErr.response?.status;
            const remoteMsg = axiosErr.response?.data?.message;
            if (httpStatus === 404) {
                const error = new Error("Provincia: el vehículo no está disponible en el nomenclador de la aseguradora.");
                error.code = "ERR_VEHICLE_NOT_FOUND";
                throw error;
            }
            if (httpStatus === 401 || httpStatus === 403) {
                const error = new Error("Provincia: credenciales inválidas o sesión expirada.");
                error.code = "ERR_UNAUTHORIZED";
                throw error;
            }
            if (httpStatus === 400) {
                const error = new Error(remoteMsg ?? "Provincia: datos de cotización inválidos.");
                error.code = "ERR_BAD_REQUEST";
                throw error;
            }
            const error = new Error(remoteMsg ?? axiosErr.message ?? "Provincia: error desconocido al cotizar.");
            error.code = `ERR_HTTP_${httpStatus ?? "UNKNOWN"}`;
            throw error;
        }
    }
}
exports.ProvinciaConnector = ProvinciaConnector;
