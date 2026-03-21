import { Request, Response, NextFunction } from "express";
import { getProvinciaBrands, getProvinciaModels, searchProvinciaCatalog } from "../catalog/provincia.catalog";
import { getSanCristobalToken } from "../connectors/san-cristobal/sanCristobal.auth";
import {
  effectiveInfoAutoCodeForQuote,
  fetchSanCristobalVehicleVersions,
  parseInfoAutoNumeric
} from "../connectors/san-cristobal/sanCristobal.catalog";
import { env } from "../config/env";

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

/**
 * Valida código InfoAuto + año contra el catálogo CA7 de San Cristóbal (no usa códigos marca/modelo de Provincia).
 * Query: codigoInfoauto, anio
 */
export async function getSanCristobalVehicleVersionController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const codigo = parseInfoAutoNumeric(String(req.query.codigoInfoauto ?? ""));
  const anio = Number(String(req.query.anio ?? "").trim());

  if (codigo === undefined) {
    res.status(400).json({
      success: false,
      code: "CATALOG_VALIDATION_ERROR",
      message: "Query param codigoInfoauto (numérico InfoAuto) es obligatorio"
    });
    return;
  }

  if (!Number.isFinite(anio) || anio < 1980 || anio > 2100) {
    res.status(400).json({
      success: false,
      code: "CATALOG_VALIDATION_ERROR",
      message: "Query param anio es obligatorio y debe ser un año razonable"
    });
    return;
  }

  if (!env.sanCristobal.baseUrl || !env.sanCristobal.username || !env.sanCristobal.password) {
    res.status(503).json({
      success: false,
      code: "SC_CONFIG_MISSING",
      message: "San Cristóbal no está configurado (SC_BASE_URL / credenciales)"
    });
    return;
  }

  try {
    const token = await getSanCristobalToken();
    const rows = await fetchSanCristobalVehicleVersions(token, anio, codigo);
    res.status(200).json({
      success: true,
      insurer: "san_cristobal",
      codigoInfoautoSolicitado: codigo,
      anio,
      count: rows.length,
      items: rows.map((r) => ({
        codigoInfoAuto: r.codigoInfoAuto,
        codigoReasignado: r.codigoReasignado,
        /** Código que usa el connector en QuoteCA7 tras validar catálogo. */
        codigoParaCotizar: effectiveInfoAutoCodeForQuote(r) || null,
        combustibleCodigo: r.combustibleCodigo ?? null,
        categoria: r.categoria ?? null,
        importado: r.importado ?? null,
        nombreCompleto: r.nombreCompleto ?? null,
        precio: r.precio ?? null
      })),
      nota:
        "Provincia y San Cristóbal pueden mapear distinto el mismo vehículo; este endpoint refleja solo el criterio SC."
    });
  } catch (error) {
    next(error);
  }
}
