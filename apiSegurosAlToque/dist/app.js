"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const pino_http_1 = __importDefault(require("pino-http"));
const catalog_routes_1 = require("./routes/catalog.routes");
const error_middleware_1 = require("./middlewares/error.middleware");
const quotes_routes_1 = require("./routes/quotes.routes");
const logger_1 = require("./utils/logger");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json({ limit: "1mb" }));
    app.use((0, pino_http_1.default)({ logger: logger_1.logger }));
    app.get("/health", (_req, res) => {
        res.status(200).json({ ok: true });
    });
    app.use("/api/v1/catalog", catalog_routes_1.catalogRouter);
    app.use("/api/v1/quotes", quotes_routes_1.quotesRouter);
    app.use(error_middleware_1.errorMiddleware);
    return app;
}
