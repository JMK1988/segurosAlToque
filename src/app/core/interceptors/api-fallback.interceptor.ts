import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

/**
 * Interceptor para gestionar caídas de la API principal (como casos donde Render se duerme).
 * Intenta primero la URL original (hasta 10-15s). Si falla o da timeout,
 * automáticamente reintenta la misma petición contra el backend local u otra contingencia.
 */
export const apiFallbackInterceptor: HttpInterceptorFn = (req, next) => {
  // Verificamos si la petición va dirigida al proxy principal
  if (req.url.startsWith('/api-proxy')) {
    return next(req).pipe(
      // Tiempo máximo de espera para la API de Render: 10 segundos
      timeout({ first: 10000 }),
      catchError((error) => {
        const errorReason = error instanceof TimeoutError ? 'Timeout' : 'Error de Conexión';
        console.warn(`[Fallback Interceptor] La API primaria falló (${errorReason}) en: ${req.url}`);
        console.warn(`[Fallback Interceptor] Intentando rescatar la operación redirigiendo a localhost:3000...`);

        // Reemplazamos /api-proxy por nuestro servidor local
        const fallbackUrl = req.url.replace('/api-proxy', 'http://localhost:3000');
        const fallbackReq = req.clone({ url: fallbackUrl });

        return next(fallbackReq).pipe(
          timeout({ first: 10000 }), // Le damos 10s al backend local
          catchError((fallbackErr) => {
            console.error(`[Fallback Interceptor] El backend local también falló para: ${fallbackUrl}`, fallbackErr);
            return throwError(() => fallbackErr);
          })
        );
      })
    );
  }

  // Si no es una petición a /api-proxy (ej: imágenes, rutas locales, etc.), pasa normal.
  return next(req);
};
