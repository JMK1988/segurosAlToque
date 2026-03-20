import { Request, Response, NextFunction } from "express";
import { getProvinciaBrands, getProvinciaModels, searchProvinciaCatalog } from "../catalog/provincia.catalog";

export async function getProvinciaBrandsController(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const items = await getProvinciaBrands();
    res.status(200).json({
      success: true,
      items
    });
  } catch (error) {
    next(error);
  }
}

export async function getProvinciaModelsController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const brandCode = String(req.query.brandCode ?? "").trim();
  const anio = String(req.query.anio ?? "2024").trim();

  if (!brandCode) {
    res.status(400).json({
      success: false,
      code: "CATALOG_VALIDATION_ERROR",
      message: "Query param brandCode is required"
    });
    return;
  }

  try {
    const models = await getProvinciaModels(brandCode, anio);
    if (models === null || models.length === 0) {
      res.status(404).json({
        success: false,
        code: "CATALOG_BRAND_NOT_FOUND",
        message: `No existe catálogo para brandCode ${brandCode} y año ${anio}`
      });
      return;
    }

    res.status(200).json({
      success: true,
      brandCode: brandCode.toUpperCase(),
      items: models
    });
  } catch (error) {
    next(error);
  }
}

export async function searchProvinciaCatalogController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const query = String(req.query.query ?? "").trim();
  if (!query) {
    res.status(400).json({
      success: false,
      code: "CATALOG_VALIDATION_ERROR",
      message: "Query param query is required"
    });
    return;
  }

  try {
    const items = await searchProvinciaCatalog(query);
    res.status(200).json({
      success: true,
      items
    });
  } catch (error) {
    next(error);
  }
}
