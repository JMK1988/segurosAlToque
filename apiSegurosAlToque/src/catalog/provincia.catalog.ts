import axios from "axios";
import { env } from "../config/env";
import { getProvinciaToken } from "../connectors/provincia/provincia.auth";

export interface CatalogBrand {
  code: string;
  name: string;
}

export interface CatalogModel {
  code: string;
  name: string;
}

export async function getProvinciaBrands(): Promise<CatalogBrand[]> {
  const token = await getProvinciaToken();
  const res = await axios.get(
    `https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/valores/marcas/4/04100?apikey=${env.provincia.apiKey}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data.map((item: { codigo: string; descripcion: string }) => ({
    code: item.codigo,
    name: item.descripcion
  }));
}

export async function getProvinciaModels(brandCode: string, anio: string = "2024"): Promise<CatalogModel[] | null> {
  const token = await getProvinciaToken();
  try {
    const res = await axios.get(
      `https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/valores/modelo/4/04100/${brandCode}/${anio}/N?apikey=${env.provincia.apiKey}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    return res.data.map((item: { codigo: string; descripcion: string }) => ({
      code: item.codigo,
      name: item.descripcion
    }));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      // Provincia devuelve 500 cuando el año no existe para esa marca, probamos un fallback genérico a un año anterior si queremos,
      // pero simplemente devolvemos vacío para que actúe el fallback local del frontend.
      return [];
    }
    throw error;
  }
}

export async function searchProvinciaCatalog(query: string): Promise<Array<{
  brandCode: string;
  brandName: string;
  modelCode: string;
  modelName: string;
}>> {
  // Sin la tabla de base de datos en memoria completa, esta búsqueda global ya no se puede hacer sin traer todo
  // El frontend no lo necesita tanto si tiene el pipe de brands -> models
  return [];
}

