/**
 * Dos backs en desarrollo (`ng serve`). Reiniciá el dev server si cambiás este archivo.
 * @see src/environments/api-backends.ts
 */
module.exports = [
  {
    context: ['/api-proxy'],
    target: 'https://apisegurosaltoque-production-be2c.up.railway.app',
    secure: true,
    changeOrigin: true,
    pathRewrite: { '^/api-proxy': '' },
  },
  {
    context: ['/api-broker'],
    target: 'https://apisegurosaltoque.up.railway.app',
    secure: true,
    changeOrigin: true,
    pathRewrite: { '^/api-broker': '' },
  },
];
