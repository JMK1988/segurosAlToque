import { Router } from "express";
import {
  getProvinciaBrandsController,
  getProvinciaModelsController,
  searchProvinciaCatalogController
} from "../controllers/catalog.controller";

export const catalogRouter = Router();

catalogRouter.get("/provincia/brands", getProvinciaBrandsController);
catalogRouter.get("/provincia/models", getProvinciaModelsController);
catalogRouter.get("/provincia/search", searchProvinciaCatalogController);
