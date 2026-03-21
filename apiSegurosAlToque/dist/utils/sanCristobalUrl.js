"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinSanCristobalUrl = joinSanCristobalUrl;
/**
 * Une SC_BASE_URL con un path (ej. /b2b-gateway/api/Quoted/QuoteCA7) sin // duplicados.
 */
function joinSanCristobalUrl(base, path) {
    const b = base.trim().replace(/\/+$/, "");
    const p = path.trim().replace(/^\/+/, "");
    if (!b)
        return `/${p}`;
    return `${b}/${p}`;
}
