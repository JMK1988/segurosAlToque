/**
 * Producción: mismo patrón que dev — `/api-proxy` y en Netlify el redirect a Railway
 * (ver `netlify.toml`). Así no hace falta CORS en la API para el front.
 * Si el sitio no tiene proxy (otro hosting), poné la URL absoluta de la API y habilitá CORS allí.
 */
export const environment = {
  production: true,
  apiBrokerBaseUrl: '/api-proxy',
};
