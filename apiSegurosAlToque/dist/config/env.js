"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.validateRequiredProductionEnv = validateRequiredProductionEnv;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function required(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required env var: ${name}`);
    }
    return value;
}
exports.env = {
    port: Number(process.env.PORT ?? 3000),
    nodeEnv: process.env.NODE_ENV ?? "development",
    provincia: {
        authUrl: process.env.PROVINCIA_AUTH_URL ??
            "https://authp.provinciaseguros.com.ar/auth/realms/ps/protocol/openid-connect/token",
        quoteUrl: process.env.PROVINCIA_QUOTE_URL ??
            "https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/cotizar",
        apiKey: process.env.PROVINCIA_API_KEY ?? "",
        username: process.env.PROVINCIA_USERNAME ?? "",
        password: process.env.PROVINCIA_PASSWORD ?? "",
        clientId: process.env.PROVINCIA_CLIENT_ID ?? "ps2",
        clientSecret: process.env.PROVINCIA_CLIENT_SECRET ?? "a0ab7e18-baea-4d38-b22e-f61184960745"
    },
    sanCristobal: {
        baseUrl: process.env.SC_BASE_URL ?? "",
        username: process.env.SC_USERNAME ?? "",
        password: process.env.SC_PASSWORD ?? "",
        quotePath: process.env.SC_QUOTE_PATH ?? "/b2b-gateway/api/v1/cotizaciones/autos"
    }
};
function validateRequiredProductionEnv() {
    if (exports.env.nodeEnv !== "production") {
        return;
    }
    required("PROVINCIA_API_KEY");
    required("PROVINCIA_USERNAME");
    required("PROVINCIA_PASSWORD");
    required("SC_BASE_URL");
    required("SC_USERNAME");
    required("SC_PASSWORD");
}
