/**
 * Netlify: `netlify.toml` reescribe `/api-proxy/*` y `/api-broker/*` a cada host Railway.
 * Si el hosting no soporta proxy, podés poner acá URLs absolutas y habilitar CORS en cada API.
 */
export const environment = {
  production: true,
  apiMulticotizadorBaseUrl: '/api-proxy',
  apiCotizacionBrokerBaseUrl: '/api-broker',
};
