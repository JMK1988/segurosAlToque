/**
 * Desarrollo (`ng serve` + `proxy.conf.cjs`).
 * Dos backs: `apiMulticotizadorBaseUrl` (Railway, `/api/v1/*`) y
 * `apiCotizacionBrokerBaseUrl` (MA/RUS/ATM, `/api/MA` etc.); ver `api-backends.ts`.
 * Tras editar el proxy, reiniciá `ng serve` (Vite no siempre recarga la config).
 */
export const environment = {
  production: false,
  /** Provincia + San Cristóbal (`apisegurosaltoque-production-be2c` en Railway). */
  apiMulticotizadorBaseUrl: '/api-proxy',
  /** MA, RUS, ATM, Mercantil Andina (`apisegurosaltoque` en Railway). */
  apiCotizacionBrokerBaseUrl: '/api-broker',
};
