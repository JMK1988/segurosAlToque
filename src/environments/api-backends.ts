/**
 * Hosts públicos (sin `https://`) de los 2 backs Railway que usa el front.
 * El navegador pega a `/api-proxy` y `/api-broker`; `proxy.conf.cjs` (dev) y Netlify reenvían acá.
 *
 * 1) Provincia + San Cristóbal (multicotizador, catálogos): `/api/v1/...` — servicio `production-be2c`.
 * 2) MA, RUS, ATM (Mercantil Andina, etc.): `/api/MA`, `/api/Rus`, `/api/Atm`, ... — `apisegurosaltoque`.
 */
export const MULTICOTIZADOR_API_HOST = 'apisegurosaltoque-production-be2c.up.railway.app';
export const COTIZACION_BROKER_API_HOST = 'apisegurosaltoque.up.railway.app';
