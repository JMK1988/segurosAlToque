import { Router } from "express";
import {
  getProvinciaBrandsController,
  getProvinciaModelsController,
  getSanCristobalVehicleVersionController,
  searchProvinciaCatalogController
} from "../controllers/catalog.controller";

export const catalogRouter = Router();

catalogRouter.get("/provincia/brands", getProvinciaBrandsController);
catalogRouter.get("/provincia/models", getProvinciaModelsController);
catalogRouter.get("/provincia/search", searchProvinciaCatalogController);
catalogRouter.get("/san-cristobal/vehicle-version", getSanCristobalVehicleVersionController);
