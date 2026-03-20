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
}
exports.ProvinciaConnector = ProvinciaConnector;
