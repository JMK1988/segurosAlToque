# Multicotizador — Documentación de Integración

## Arquitectura

```
src/app/core/
├── models/
│   ├── ma-cotizador.models.ts    # Tipos específicos de la API de MA
│   └── cotizador.models.ts       # Modelos genéricos de la UI
└── services/
    ├── ma-cotizador.service.ts   # Servicio de bajo nivel → API SegurosAlToque
    └── cotizador.service.ts      # Orquestador (facade multicotizador)
```

---

## Aseguradora activa: Mercantil Andina (MA)

| Campo | Valor |
|-------|-------|
| **API Base URL** | `https://api-segurosaltoque.onrender.com` |
| **Swagger** | `https://api-segurosaltoque.onrender.com/swagger/index.html` |
| **Protocolo** | REST / JSON |

### Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/version` | Versión del servicio InfoAuto |
| `POST` | `/cotizar` | Obtiene cotizaciones de coberturas |

### Coberturas disponibles (MA)

| Código | Descripción |
|--------|-------------|
| `A` | Responsabilidad Civil Limitada |
| `B` | R.C.L. + Incendio + Robo + Accidente Total |
| `B0` | R.C.L. + Robo/Hurto Total |
| `B1` | R.C.L. + Incendio Total + Robo/Hurto Total |
| `B3` | R.C.L. + Incendio Total y Parcial |
| `M BASICA` | RCL + Inc + Robo Tot y Parcial + Acc.Total |
| `M PLUS` | RCL + Inc + Robo Tot y Parcial + Acc.Total (premium) |

### Ejemplo de request `POST /cotizar`

```json
{
  "localidad": { "codigo_postal": 2000 },
  "vehiculo": {
    "infoauto": 360470,
    "anio": 2007,
    "uso": 1,
    "gnc": false,
    "rastreo": 0
  },
  "comision": 20,
  "bonificacion": 0,
  "periodo": 1,
  "cuotas": 1,
  "pago": { "tipo_pago": "D" },
  "ajuste_suma": 25,
  "iva": 5,
  "desglose": true
}
```

---

## Cómo usar en un componente

```typescript
// En el componente
private readonly cotizador = inject(CotizadorService);

readonly resultados = this.cotizador.resultados;
readonly cargando = this.cotizador.hayCargando;
readonly coberturas = this.cotizador.todasLasCoberturas;

cotizar() {
  this.cotizador.cotizar({
    localidad: { codigo_postal: 2000 },
    vehiculo: { infoauto: 360470, anio: 2007, uso: 1, gnc: false, rastreo: 0 },
    cuotas: 1,
    tipo_pago: 'D',
  });
}
```

---

## Cómo agregar una nueva aseguradora

1. **Agregar el id** en `AseguradoraId` (`cotizador.models.ts`):
   ```typescript
   export type AseguradoraId = 'ma' | 'xyz';
   ```

2. **Crear el modelo específico** `xyz-cotizador.models.ts` con los tipos de su API.

3. **Crear el servicio** `xyz-cotizador.service.ts` con el método `cotizar()`.

4. **En `CotizadorService`**:
   - Inyectar `XyzCotizadorService`.
   - Inicializar su estado en `_resultados`.
   - Agregar `xyz$` al `forkJoin`.
   - Crear `_normalizarXyz()` que mapee la respuesta al tipo `CoberturaResultado`.

---

## Estructura del `ResultadoAseguradora` (lo que recibe la UI)

```typescript
{
  aseguradora: 'ma',
  nombreAseguradora: 'Mercantil Andina',
  logoUrl: 'assets/logos/ma.png',
  estado: 'ok', // idle | cargando | ok | error
  fechaCotizacion: '2026-02-21T00:00Z',
  vehiculo: {
    nombre: 'RENAULT CLIO 2 F2 1.6 5P.',
    valor: 9154200,
    sumaAsegurada: 9154200
  },
  coberturas: [
    {
      codigoProducto: 'A',
      descripcion: 'A - Responsabilidad Civil Limitada',
      premio: 41123.41,     // precio total al asegurado
      prima: 21871.37,      // prima neta
      iva: 6981.34,
      cantidadCuotas: 1,
      importeCuota: 0,      // 0 = contado
      granizo: false,
      requiereInspeccion: false,
      codigoInterno: 800,
      franquicia: 0
    },
    // ...más coberturas
  ]
}
```
