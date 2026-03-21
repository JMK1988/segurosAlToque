"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteAutoMultiController = quoteAutoMultiController;
const crypto_1 = require("crypto");
const quote_schema_1 = require("../schemas/quote.schema");
const multiQuote_service_1 = require("../services/multiQuote.service");
async function quoteAutoMultiController(req, res, next) {
    try {
        const payload = quote_schema_1.multiQuoteSchema.parse(req.body);
        const traceId = String(req.headers["x-trace-id"] ?? (0, crypto_1.randomUUID)());
        const result = await (0, multiQuote_service_1.quoteAutoMulti)(payload, traceId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
}
