"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanCristobalConnector = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const sanCristobal_mapper_1 = require("./sanCristobal.mapper");
const sanCristobal_auth_1 = require("./sanCristobal.auth");
class SanCristobalConnector {
    constructor() {
        this.insurer = "san_cristobal";
    }
    async quoteAuto(request, traceId) {
        if (!env_1.env.sanCristobal.baseUrl || !env_1.env.sanCristobal.username || !env_1.env.sanCristobal.password) {
            throw Object.assign(new Error("San Cristobal env vars are missing"), { code: "SC_CONFIG_MISSING", status: 500 });
        }
        const token = await (0, sanCristobal_auth_1.getSanCristobalToken)();
        const response = await axios_1.default.post(`${env_1.env.sanCristobal.baseUrl}${env_1.env.sanCristobal.quotePath}`, request, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "x-trace-id": traceId
            },
            timeout: 30000
        });
        return (0, sanCristobal_mapper_1.mapSanCristobalResponse)(response.data);
    }
}
exports.SanCristobalConnector = SanCristobalConnector;
