"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteAutoMulti = quoteAutoMulti;
const provincia_connector_1 = require("../connectors/provincia/provincia.connector");
const sanCristobal_connector_1 = require("../connectors/san-cristobal/sanCristobal.connector");
const env_1 = require("../config/env");
function getActiveConnectors() {
    const activeConnectors = [new provincia_connector_1.ProvinciaConnector()];
    const token = env_1.env.sanCristobal.authToken.trim();
    const hasRealToken = token.length > 0 && !token.startsWith("<");
    // Keep San Cristobal optional while credentials are pending.
    if (env_1.env.sanCristobal.baseUrl && hasRealToken) {
        activeConnectors.push(new sanCristobal_connector_1.SanCristobalConnector());
    }
    return activeConnectors;
}
async function quoteAutoMulti(request, traceId) {
    const connectors = getActiveConnectors();
    const settled = await Promise.allSettled(connectors.map((connector) => connector.quoteAuto(request, traceId)));
    const results = [];
    const errors = [];
    settled.forEach((entry, idx) => {
        const insurer = connectors[idx].insurer;
        if (entry.status === "fulfilled") {
            results.push(entry.value);
            return;
        }
        const reason = entry.reason;
        errors.push({
            insurer,
            code: reason.code ?? "QUOTE_FAILED",
            message: reason.message ?? "Unknown error"
        });
    });
    return {
        traceId,
        success: results.length > 0,
        results,
        errors
    };
}
