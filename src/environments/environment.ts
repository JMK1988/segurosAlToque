/**
 * Desarrollo (`ng serve` + `proxy.conf.json`).
 * Usá `/api-proxy` para que las llamadas sean mismo-origen (`localhost:4200`) y el proxy
 * reenvíe a Railway; si no, el navegador bloquea por CORS.
 * @see broker-api-host.ts para el host real detrás del proxy.
 */
export const environment = {
  production: false,
  apiBrokerBaseUrl: '/api-proxy',
};
