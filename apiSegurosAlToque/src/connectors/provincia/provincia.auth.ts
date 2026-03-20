import axios from "axios";
import { env } from "../../config/env";

interface TokenCache {
  value: string;
  expiresAt: number;
}

let tokenCache: TokenCache | null = null;

export async function getProvinciaToken(): Promise<string> {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.value;
  }

  const body = new URLSearchParams();
  body.set("client_id", env.provincia.clientId);
  body.set("client_secret", env.provincia.clientSecret);
  body.set("username", env.provincia.username);
  body.set("password", env.provincia.password);
  body.set("grant_type", "password");

  const response = await axios.post<{
    access_token: string;
    expires_in: number;
  }>(env.provincia.authUrl, body.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    timeout: 15000
  });

  tokenCache = {
    value: response.data.access_token,
    expiresAt: Date.now() + Math.max(30, response.data.expires_in - 60) * 1000
  };

  return tokenCache.value;
}
