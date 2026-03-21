import axios from "axios";
import { env } from "../../config/env";
import { joinSanCristobalUrl } from "../../utils/sanCristobalUrl";

interface TokenCache {
  value: string;
  expiresAt: number;
}

let tokenCache: TokenCache | null = null;

export async function getSanCristobalToken(): Promise<string> {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.value;
  }

  const response = await axios.post<{
    Id?: string;
    Auth_Token?: string;
    Expires_In?: number;
    Refresh_Token?: string;
  }>(
    joinSanCristobalUrl(env.sanCristobal.baseUrl, "/b2b-gateway/api/Auth/LoginAsync"),
    {
      userName: env.sanCristobal.username,
      password: env.sanCristobal.password
    },
    {
      headers: {
        "Content-Type": "application/json"
      },
      // Mismo orden de magnitud que la cotización: LoginAsync a veces supera 15s (cold start / red lenta).
      timeout: 45000
    }
  );

  const data = response.data;
  const token = data.Auth_Token || data.Id;
  
  if (!token) {
    throw new Error("San Cristobal: No se pudo obtener el token Auth_Token o Id");
  }

  // Expires_In is likely in minutes since it returned ~118 for 2 hours. Defaults to 60 min if missing.
  const expiresInMinutes = data.Expires_In || 60;

  tokenCache = {
    value: token,
    // Buffer of 5 minutes (300 seconds) before expiration
    expiresAt: Date.now() + Math.max(0, expiresInMinutes - 5) * 60 * 1000
  };

  return tokenCache.value;
}
