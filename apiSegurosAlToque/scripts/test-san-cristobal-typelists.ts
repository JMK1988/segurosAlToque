/**
 * Descarga códigos paramétricos de San Cristóbal (TypeList + algunos GET útiles)
 * para armar el payload de cotización CA7.
 *
 * Ejecutar: npm run test:sc:types
 *
 * Genera: scripts/san-cristobal-typelists-cache.json (última respuesta por endpoint)
 */
import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const baseUrl = process.env.SC_BASE_URL ?? "";
const username = process.env.SC_USERNAME ?? "";
const password = process.env.SC_PASSWORD ?? "";

/** TypeList usados en swagger B2B para vehículo / póliza CA7 */
const TYPE_LIST_NAMES = [
  "CA7ProductOffering",
  "Product",
  "Usage",
  "Categories",
  "Colors",
  "FuelTypes",
  "AutomaticAdjustVehicles",
  "AutomaticAdjustSum",
  "VehicleAccesories",
  "AdditionalFuelType",
  "GPSProvider",
  "Jurisdiction",
  "OfficialIDType",
  "GenderType",
  "ChannelEntry",
  "PaymentType",
  "Term",
  "PolicyType"
];

/** Rutas adicionales (no siempre bajo TypeList) */
const EXTRA_GETS: { key: string; path: string }[] = [
  { key: "Postal.ProvinciasArgentinas", path: "/b2b-gateway/api/Postal/ProvinciasArgentinas" }
];

type EntryResult = { ok: true; status: number; data: unknown } | { ok: false; status: number; error: string };

async function login(): Promise<string> {
  const { data } = await axios.post<{ Auth_Token?: string; Id?: string }>(
    `${baseUrl}/b2b-gateway/api/Auth/LoginAsync`,
    { userName: username, password },
    { headers: { "Content-Type": "application/json" }, timeout: 45000 }
  );
  const token = data.Auth_Token || data.Id;
  if (!token) throw new Error("Login: sin token");
  return token;
}

function countValues(data: unknown): number | string {
  if (data && typeof data === "object" && "Values" in (data as object)) {
    const v = (data as { Values?: unknown[] }).Values;
    return Array.isArray(v) ? v.length : "—";
  }
  return "—";
}

async function main(): Promise<void> {
  if (!baseUrl || !username || password === "" || password === "YOUR_PASSWORD") {
    console.error("Configurá SC_BASE_URL, SC_USERNAME y SC_PASSWORD en .env");
    process.exit(1);
  }

  console.log("Base:", baseUrl);
  const token = await login();
  console.log("Token OK\n");

  const snapshot: Record<string, EntryResult> = {};
  const summary: { name: string; status: number; values?: number | string; note?: string }[] = [];

  for (const name of TYPE_LIST_NAMES) {
    const url = `${baseUrl}/b2b-gateway/api/TypeList/${name}`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
        timeout: 45000,
        validateStatus: () => true
      });
      const cv = countValues(res.data);
      if (res.status >= 200 && res.status < 300) {
        snapshot[`TypeList/${name}`] = { ok: true, status: res.status, data: res.data };
        summary.push({ name: `TypeList/${name}`, status: res.status, values: cv });
        console.log(`OK  ${res.status}  TypeList/${name}  Values: ${cv}`);
      } else {
        const msg =
          typeof res.data === "object" && res.data !== null && "Message" in res.data
            ? String((res.data as { Message?: string }).Message)
            : JSON.stringify(res.data).slice(0, 120);
        snapshot[`TypeList/${name}`] = { ok: false, status: res.status, error: msg };
        summary.push({ name: `TypeList/${name}`, status: res.status, note: msg });
        console.log(`ERR ${res.status}  TypeList/${name}  ${msg}`);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      snapshot[`TypeList/${name}`] = { ok: false, status: 0, error: msg };
      summary.push({ name: `TypeList/${name}`, status: 0, note: msg });
      console.log(`EXC TypeList/${name}  ${msg}`);
    }
  }

  for (const { key, path: p } of EXTRA_GETS) {
    const url = `${baseUrl}${p}`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
        timeout: 45000,
        validateStatus: () => true
      });
      const cv = countValues(res.data);
      if (res.status >= 200 && res.status < 300) {
        snapshot[key] = { ok: true, status: res.status, data: res.data };
        summary.push({ name: key, status: res.status, values: cv });
        console.log(`OK  ${res.status}  ${key}  Values: ${cv}`);
      } else {
        const msg =
          typeof res.data === "object" && res.data !== null && "Message" in res.data
            ? String((res.data as { Message?: string }).Message)
            : JSON.stringify(res.data).slice(0, 120);
        snapshot[key] = { ok: false, status: res.status, error: msg };
        summary.push({ name: key, status: res.status, note: msg });
        console.log(`ERR ${res.status}  ${key}  ${msg}`);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      snapshot[key] = { ok: false, status: 0, error: msg };
      summary.push({ name: key, status: 0, note: msg });
      console.log(`EXC ${key}  ${msg}`);
    }
  }

  const outPath = path.join(process.cwd(), "scripts", "san-cristobal-typelists-cache.json");
  const payload = {
    fetchedAt: new Date().toISOString(),
    baseUrl,
    summary,
    results: snapshot
  };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`\nSnapshot guardado: ${outPath}`);
  console.log("\nTip: abrí el JSON y buscá 'Values' con Code/Description para mapear Category, Color, FuelType, Usage, etc.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
