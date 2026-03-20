# Consumo desde Angular - Multicotizador API

Esta guía documenta cómo consumir la API de multicotización desde Angular.

## Base URL

- Local: `http://localhost:3000`
- Endpoint principal: `POST /api/v1/quotes/auto/multi`
- Healthcheck: `GET /health`

## Catálogos Provincia (disponibles)

Para evitar hardcodear códigos en frontend, el backend expone:

- `GET /api/v1/catalog/provincia/brands`
- `GET /api/v1/catalog/provincia/models?brandCode=TOY`
- `GET /api/v1/catalog/provincia/search?query=etios`

Ejemplo `brands`:

```json
{
  "success": true,
  "items": [
    { "code": "TOY", "name": "TOYOTA" },
    { "code": "REN", "name": "RENAULT" }
  ]
}
```

Ejemplo `models`:

```json
{
  "success": true,
  "brandCode": "TOY",
  "items": [
    { "code": "045307", "name": "ETIOS 1.5 XLS 5P" }
  ]
}
```

## Contrato de request

```json
{
  "person": {
    "dni": "30111222",
    "cuit": "20301112229",
    "fullName": "Juan Perez",
    "email": "juan@test.com",
    "phone": "2235123456",
    "postalCode": "7600",
    "provinceCode": "1",
    "genderCode": "M"
  },
  "vehicle": {
    "year": "2020",
    "brandCode": "TOY",
    "modelCode": "045307",
    "useCode": "1",
    "vehicleTypeCode": "1",
    "isZeroKm": false,
    "insuredValue": 20000000,
    "accessoriesAmount": 0
  },
  "policy": {
    "startDateCode": "E",
    "paymentPlanCode": "1",
    "paymentMethodCode": "2"
  }
}
```

## Lo que el backend necesita del front (obligatorio)

Para que Provincia cotice, Angular debe enviar estos campos con formato correcto:

- `person.dni`: solo números, 7-8 dígitos.
- `person.postalCode`: código postal numérico de riesgo (ej: `2025`).
- `vehicle.year`: año del vehículo (string numérico, ej: `2020`).
- `vehicle.brandCode`: código de marca de Provincia (no texto libre).
- `vehicle.modelCode`: código de modelo/versión de Provincia (no texto libre).
- `vehicle.vehicleTypeCode`: código de tipo de vehículo.
- `vehicle.useCode`: código de uso.
- `vehicle.insuredValue`: número mayor a 0.

Ejemplos que no funcionan:

- `brandCode: "renault"`
- `modelCode: "captur"`
- `modelCode: "2.0 intense"`

Ejemplos válidos (solo ilustrativos):

- `brandCode: "TOY"`
- `modelCode: "045307"`

Si se envía texto en lugar de códigos, el proveedor puede devolver `404/500` y el backend responderá `502`.

## Contrato de response

```json
{
  "traceId": "27f8259b-bd09-4ff4-b038-779cb0348ff4",
  "success": true,
  "results": [
    {
      "insurer": "provincia",
      "quoteNumber": "127975734",
      "quoteDate": "19/03/2026",
      "plans": [
        {
          "planId": "22",
          "planName": "TERCEROS COMPLETOS FULL",
          "description": "",
          "monthlyPremium": 100989,
          "currency": "ARS"
        }
      ]
    }
  ],
  "errors": []
}
```

## Estados HTTP

- `200`: al menos una aseguradora cotizó (`success: true`).
- `502`: ninguna aseguradora cotizó (`success: false`).
- `400`: error de validación de payload.
- `500`: error interno no controlado.

## Veredicto de prueba real (Provincia)

Se probó en ambiente local con el vehículo:

- marca: Renault
- modelo: Captur
- versión: 2.0 Intense
- código postal: 2025

Resultado:

- con `brandCode: "REN"` y `modelCode: "CAPTUR"` la API de Provincia devolvió error del proveedor (404), propagado como `502` en el multicotizador.
- con un par de códigos válidos conocidos (`brandCode: "TOY"`, `modelCode: "045307"`) la cotización respondió correctamente.

Conclusión:

- Provincia no acepta marca/modelo en texto libre.
- Para cotizar correctamente se deben enviar códigos paramétricos válidos para marca y modelo.

## Modelos TypeScript para Angular

```ts
export interface MultiQuoteRequest {
  person: {
    dni: string;
    cuit?: string;
    fullName: string;
    email: string;
    phone: string;
    postalCode: string;
    provinceCode?: string;
    genderCode?: "M" | "F" | "X";
  };
  vehicle: {
    year: string;
    brandCode: string;
    modelCode: string;
    useCode: string;
    vehicleTypeCode: string;
    isZeroKm: boolean;
    insuredValue: number;
    accessoriesAmount?: number;
  };
  policy: {
    startDateCode?: string;
    paymentPlanCode?: string;
    paymentMethodCode?: string;
  };
}

export interface QuotePlan {
  planId: string;
  planName: string;
  description?: string;
  monthlyPremium?: number;
  annualReferencePremium?: number;
  currency: string;
}

export interface QuoteResult {
  insurer: "provincia" | "san_cristobal";
  quoteNumber?: string;
  quoteDate?: string;
  plans: QuotePlan[];
}

export interface QuoteError {
  insurer: "provincia" | "san_cristobal";
  code: string;
  message: string;
}

export interface MultiQuoteResponse {
  traceId: string;
  success: boolean;
  results: QuoteResult[];
  errors: QuoteError[];
}
```

## Servicio Angular (HttpClient)

```ts
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class QuoteService {
  private readonly apiUrl = "http://localhost:3000/api/v1/quotes";

  constructor(private readonly http: HttpClient) {}

  quoteAutoMulti(payload: MultiQuoteRequest): Observable<MultiQuoteResponse> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-trace-id": crypto.randomUUID()
    });

    return this.http.post<MultiQuoteResponse>(`${this.apiUrl}/auto/multi`, payload, { headers });
  }
}
```

## Manejo recomendado de errores en Angular

```ts
import { HttpErrorResponse } from "@angular/common/http";

this.quoteService.quoteAutoMulti(payload).subscribe({
  next: (res) => {
    this.response = res;
  },
  error: (err: HttpErrorResponse) => {
    const backendError = err.error;
    console.error("[Cotizador] HTTP status:", err.status);
    console.error("[Cotizador] Backend body:", backendError);

    if (err.status === 400) {
      // Payload inválido en frontend
      this.errorMessage = "Datos incompletos o inválidos para cotizar.";
      return;
    }

    if (err.status === 502) {
      // Error de proveedor (ej: código de modelo no válido)
      const providerMessage = backendError?.errors?.[0]?.message ?? "No fue posible cotizar.";
      this.errorMessage = `No se pudo cotizar en este momento: ${providerMessage}`;
      return;
    }

    this.errorMessage = "Error inesperado al cotizar.";
  }
});
```

## Checklist de integración front antes de cotizar

- Validar que no se envíen textos en `brandCode` y `modelCode`.
- Persistir y mostrar `traceId` cuando falle la cotización.
- Loguear `err.status` y `err.error` completos en ambiente de QA.
- Mostrar mensaje funcional para `502` (no error técnico crudo).
- No bloquear UI si en el futuro hay errores parciales por aseguradora.

## Ejemplo de uso en componente

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-quote-page",
  template: `
    <button (click)="cotizar()">Cotizar</button>
    <pre *ngIf="response">{{ response | json }}</pre>
  `
})
export class QuotePageComponent {
  response?: MultiQuoteResponse;

  constructor(private readonly quoteService: QuoteService) {}

  cotizar(): void {
    const payload: MultiQuoteRequest = {
      person: {
        dni: "30111222",
        cuit: "20301112229",
        fullName: "Juan Perez",
        email: "juan@test.com",
        phone: "2235123456",
        postalCode: "7600",
        provinceCode: "1",
        genderCode: "M"
      },
      vehicle: {
        year: "2020",
        brandCode: "TOY",
        modelCode: "045307",
        useCode: "1",
        vehicleTypeCode: "1",
        isZeroKm: false,
        insuredValue: 20000000,
        accessoriesAmount: 0
      },
      policy: {
        startDateCode: "E",
        paymentPlanCode: "1",
        paymentMethodCode: "2"
      }
    };

    this.quoteService.quoteAutoMulti(payload).subscribe({
      next: (res) => (this.response = res),
      error: (err) => {
        console.error("Error al cotizar", err);
      }
    });
  }
}
```

## Recomendaciones para producción

- No hardcodear base URL: usar `environment.ts`.
- Implementar interceptor de errores HTTP.
- Persistir `traceId` para soporte.
- Definir timeout de request en front (por ejemplo 30s).
- Si `success` es `true`, mostrar resultados aunque existan `errors` parciales.
- Implementar un paso previo de catálogo para que el usuario seleccione marca/modelo por código (no por texto).
- Si el backend responde `502` con `ERR_BAD_REQUEST` o `ERR_BAD_RESPONSE`, mostrar mensaje de "modelo/versión no disponible en nomenclador de la aseguradora".

## Notas actuales del backend

- Provincia está operativa.
- San Cristóbal puede quedar en standby sin romper el endpoint.
- El contrato de response se mantiene estable para que Angular no cambie cuando actives más aseguradoras.
- Si `SC_AUTH_TOKEN` está vacío o en placeholder (`<...>`), San Cristóbal se desactiva automáticamente.
