/**
 * Host público del Broker (MA, RUS, ATM) en Railway (`RAILWAY_PUBLIC_DOMAIN` sin `https://`).
 * El front no llama a esta URL directamente: usa `environment.apiBrokerBaseUrl` = `/api-proxy`
 * y el proxy (`proxy.conf.json` / `netlify.toml`) reenvía acá para evitar CORS.
 */
export const BROKER_API_HOST = 'apisegurosaltoque.up.railway.app';
