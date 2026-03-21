"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysToDotnetCamelCaseJson = keysToDotnetCamelCaseJson;
/**
 * Convierte claves de objeto a camelCase como System.Text.Json (solo primera letra en minúscula).
 * Útil para APIs .NET que esperan camelCase en el cuerpo JSON.
 */
function keysToDotnetCamelCaseJson(o) {
    if (o === null || o === undefined)
        return o;
    if (Array.isArray(o))
        return o.map(keysToDotnetCamelCaseJson);
    if (typeof o !== "object")
        return o;
    const out = {};
    for (const [k, v] of Object.entries(o)) {
        const camel = k.charAt(0).toLowerCase() + k.slice(1);
        out[camel] = keysToDotnetCamelCaseJson(v);
    }
    return out;
}
