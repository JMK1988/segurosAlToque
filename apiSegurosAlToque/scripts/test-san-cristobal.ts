/**
 * Prueba de integración San Cristóbal (UAT/producción según .env).
 *
 * Ejecutar: npm run test:sc
 *
 * Hallazgos (UAT api-uat.sancristobalonline.com.ar):
 * - TypeList Product incluye el ramo "CA7CommAuto" (Automotores), no "CA7_PersonalAuto".
 * - TypeList CA7ProductOffering lista los planes CA7_A … CA7_D, CA7_Basic, etc.
 * - QuoteCA7 con body envuelto en { request: ... } devuelve error claro si no matchea el modelo.
 * - CA7 VehicleInfo (swagger) usa la propiedad "InfoautoCode" → JSON "infoautoCode".
 *   Enviar "infoAutoCode" no mapea (JSON case-sensitive) y el servidor puede responder NullReference.
 */
import axios from "axios";
import dotenv from "dotenv";
import path from "path";

import { mapSanCristobalRequest } from "../src/connectors/san-cristobal/sanCristobal.mapper";
import type { MultiQuoteRequest } from "../src/types/quote.types";
import { keysToDotnetCamelCaseJson } from "../src/utils/dotnetCamelCaseJson";
import { joinSanCristobalUrl } from "../src/utils/sanCristobalUrl";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const baseUrl = process.env.SC_BASE_URL ?? "";
const username = process.env.SC_USERNAME ?? "";
const password = process.env.SC_PASSWORD ?? "";
const quotePath = process.env.SC_QUOTE_PATH ?? "/b2b-gateway/api/Quoted/QuoteCA7";

const sampleRequest: MultiQuoteRequest = {
  person: {
    dni: "30111222",
    fullName: "Cotizacion Web SegurosAlToque",
    email: "cotizador@segurosaltoque.com",
    phone: "1130000000",
    postalCode: "1425",
    provinceCode: "1",
    genderCode: "M"
  },
  vehicle: {
    year: "2025",
    brandCode: "BAI",
    modelCode: "999999",
    useCode: "1",
    vehicleTypeCode: "1",
    isZeroKm: false,
    insuredValue: 49220000,
    accessoriesAmount: 0,
    infoAutoCode: "1180020",
    isNational: false,
    vehicleNameHint: "BAIC X55 1.5 T CVT"
  },
  policy: {}
};

async function login(): Promise<string> {
  const { data } = await axios.post<{ Auth_Token?: string; Id?: string }>(
    joinSanCristobalUrl(baseUrl.replace(/\/+$/, ""), "/b2b-gateway/api/Auth/LoginAsync"),
    { userName: username, password },
    { headers: { "Content-Type": "application/json" }, timeout: 45000 }
  );
  const token = data.Auth_Token || data.Id;
  if (!token) throw new Error("Login: sin Auth_Token ni Id");
  return token;
}

async function main(): Promise<void> {
  if (!baseUrl || !username || password === "" || password === "YOUR_PASSWORD") {
    console.error("Configurá SC_BASE_URL, SC_USERNAME y SC_PASSWORD en .env");
    process.exit(1);
  }

  console.log("SC_BASE_URL:", baseUrl);
  console.log("SC_QUOTE_PATH:", quotePath);

  const token = await login();
  console.log("Token OK (longitud):", token.length);

  for (const name of ["CA7ProductOffering", "Product"]) {
    const url = `${baseUrl}/b2b-gateway/api/TypeList/${name}`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      timeout: 30000
    });
    console.log(`\n--- GET TypeList/${name} ---`);
    console.log(JSON.stringify(data, null, 2).slice(0, 3500));
  }

  const mapped = mapSanCristobalRequest(sampleRequest);
  const quotePascal = process.env.SC_QUOTE_PASCAL_JSON === "true";
  const body = (quotePascal ? mapped : keysToDotnetCamelCaseJson(mapped)) as Record<string, unknown>;
  const url = joinSanCristobalUrl(baseUrl.replace(/\/+$/, ""), quotePath);

  console.log("\n--- POST QuoteCA7 (igual que el connector) ---");
  console.log("SC_QUOTE_PASCAL_JSON:", quotePascal);
  console.log("URL:", url);
  console.log(JSON.stringify(body, null, 2).slice(0, 5000));

  const res = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "x-trace-id": quotePascal ? "test-sc-pascal" : "test-sc-camel"
    },
    timeout: 60000,
    validateStatus: () => true
  });

  console.log("\nStatus:", res.status);
  console.log("Response:", JSON.stringify(res.data, null, 2).slice(0, 12000));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
