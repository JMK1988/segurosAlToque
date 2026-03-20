"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const zod_1 = require("zod");
function errorMiddleware(error, _req, res, _next) {
    if (error instanceof zod_1.ZodError) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            details: error.issues
        });
        return;
    }
    const err = error;
    res.status(err.status ?? 500).json({
        error: err.code ?? "INTERNAL_ERROR",
        message: err.message ?? "Unexpected error"
    });
}
