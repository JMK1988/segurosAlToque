"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSanCristobalToken = getSanCristobalToken;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const sanCristobalUrl_1 = require("../../utils/sanCristobalUrl");
let tokenCache = null;
async function getSanCristobalToken() {
    if (tokenCache && Date.now() < tokenCache.expiresAt) {
        return tokenCache.value;
    }
    const response = await axios_1.default.post((0, sanCristobalUrl_1.joinSanCristobalUrl)(env_1.env.sanCristobal.baseUrl, "/b2b-gateway/api/Auth/LoginAsync"), {
        userName: env_1.env.sanCristobal.username,
        password: env_1.env.sanCristobal.password
    }, {
        headers: {
            "Content-Type": "application/json"
        },
        // Mismo orden de magnitud que la cotización: LoginAsync a veces supera 15s (cold start / red lenta).
        timeout: 45000
    });
    const data = response.data;
    const token = data.Auth_Token || data.Id;
    if (!token) {
        throw new Error("San Cristobal: No se pudo obtener el token Auth_Token o Id");
    }
    // Expires_In is likely in minutes since it returned ~118 for 2 hours. Defaults to 60 min if missing.
    const expiresInMinutes = data.Expires_In || 60;
    tokenCache = {
        value: token,
        // Buffer of 5 minutes (300 seconds) before expiration
        expiresAt: Date.now() + Math.max(0, expiresInMinutes - 5) * 60 * 1000
    };
    return tokenCache.value;
}
