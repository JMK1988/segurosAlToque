import dotenv from "dotenv";

dotenv.config();

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  provincia: {
    authUrl:
      process.env.PROVINCIA_AUTH_URL ??
      "https://authp.provinciaseguros.com.ar/auth/realms/ps/protocol/openid-connect/token",
    quoteUrl:
      process.env.PROVINCIA_QUOTE_URL ??
      "https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/cotizar",
    apiKey: process.env.PROVINCIA_API_KEY ?? "",
    username: process.env.PROVINCIA_USERNAME ?? "",
    password: process.env.PROVINCIA_PASSWORD ?? "",
    clientId: process.env.PROVINCIA_CLIENT_ID ?? "ps2",
    clientSecret: process.env.PROVINCIA_CLIENT_SECRET ?? "a0ab7e18-baea-4d38-b22e-f61184960745"
  },
  sanCristobal: {
    baseUrl: process.env.SC_BASE_URL ?? "",
    authToken: process.env.SC_AUTH_TOKEN ?? "",
    quotePath: process.env.SC_QUOTE_PATH ?? "/b2b-gateway/api/v1/cotizaciones/autos"
  }
};

export function validateRequiredProductionEnv(): void {
  if (env.nodeEnv !== "production") {
    return;
  }
  required("PROVINCIA_API_KEY");
  required("PROVINCIA_USERNAME");
  required("PROVINCIA_PASSWORD");
  required("SC_BASE_URL");
  required("SC_AUTH_TOKEN");
}
