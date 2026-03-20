"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogRouter = void 0;
const express_1 = require("express");
const catalog_controller_1 = require("../controllers/catalog.controller");
exports.catalogRouter = (0, express_1.Router)();
exports.catalogRouter.get("/provincia/brands", catalog_controller_1.getProvinciaBrandsController);
exports.catalogRouter.get("/provincia/models", catalog_controller_1.getProvinciaModelsController);
exports.catalogRouter.get("/provincia/search", catalog_controller_1.searchProvinciaCatalogController);
