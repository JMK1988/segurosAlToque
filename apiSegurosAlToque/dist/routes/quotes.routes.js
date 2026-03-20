"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotesRouter = void 0;
const express_1 = require("express");
const quotes_controller_1 = require("../controllers/quotes.controller");
exports.quotesRouter = (0, express_1.Router)();
exports.quotesRouter.post("/auto/multi", quotes_controller_1.quoteAutoMultiController);
