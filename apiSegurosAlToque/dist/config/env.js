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
        /**
         * Host del ambiente donde existen SC_USERNAME / SC_PASSWORD (UAT ≠ prod; credenciales no son intercambiables).
         * Sin barra final. Ej. UAT: https://api-uat.sancristobalonline.com.ar
         */
        baseUrl: (process.env.SC_BASE_URL ?? "").trim().replace(/\/+$/, ""),
        username: process.env.SC_USERNAME ?? "",
        password: process.env.SC_PASSWORD ?? "",
        quotePath: process.env.SC_QUOTE_PATH ?? "/b2b-gateway/api/Quoted/QuoteCA7",
        /** Ramo (TypeList Product): Automotores = CA7CommAuto */
        ca7PolicyProduct: process.env.SC_CA7_POLICY_PRODUCT ?? "CA7CommAuto",
        /** Ofertas/planes CA7 (TypeList CA7ProductOffering), separadas por coma */
        ca7OfferingCodes: process.env.SC_CA7_OFFERING_CODES ?? "CA7_Basic",
        /**
         * Validar / enriquecer cotización con el catálogo SC (código InfoAuto distinto al de Provincia si aplica).
         * Desactivar con SC_VEHICLE_LOOKUP_ENABLED=false.
         */
        vehicleLookupEnabled: process.env.SC_VEHICLE_LOOKUP_ENABLED !== "false",
        /**
         * Catálogo InfoAuto (OpenAPI B2B.Api.Ca7: GET /api/CatalogoVehiculos/AutosVersionPorCodigoInfoauto, server /b2b-gateway).
         * Ver https://api.sancristobal.com.ar/b2b-gateway/b2b-api-ca7/swagger.json
         */
        vehicleLookupPath: process.env.SC_VEHICLE_LOOKUP_PATH ?? "/b2b-gateway/api/CatalogoVehiculos/AutosVersionPorCodigoInfoauto",
        /** Header X-Client-App requerido por algunos endpoints CA7 (vacío = no enviar). */
        clientAppHeader: process.env.SC_CLIENT_APP ?? "B2BPortal",
        /**
         * Si true, el POST QuoteCA7 envía el cuerpo en PascalCase (sin convertir a camelCase).
         * Útil si el ambiente SC no deserializa bien el JSON camelCase del helper.
         */
        quotePascalCaseJson: process.env.SC_QUOTE_PASCAL_JSON === "true"
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
