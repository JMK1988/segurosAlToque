/**
 * Desarrollo (`ng serve` + `proxy.conf.json`).
 * Dos backs: `apiMulticotizadorBaseUrl` (Railway, `/api/v1/*`) y
 * `apiCotizacionBrokerBaseUrl` (MA/RUS/ATM, `/api/MA` etc.); ver `api-backends.ts`.
 */
export const environment = {
  production: false,
  /** Provincia + San Cristóbal (`apisegurosaltoque-production-be2c` en Railway). */
  apiMulticotizadorBaseUrl: '/api-proxy',
  /** MA, RUS, ATM, Mercantil Andina (`apisegurosaltoque` en Railway). */
  apiCotizacionBrokerBaseUrl: '/api-broker',
};
