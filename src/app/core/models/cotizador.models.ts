// ============================================================
// MODELOS GENÉRICOS DEL MULTICOTIZADOR
// Capa de abstracción sobre las APIs de cada aseguradora.
// La UI solo consume estos modelos — no los modelos específicos.
// ============================================================

/** Aseguradoras integradas */
export type AseguradoraId = 'ma' | 'rus'; // 'ma' = Mercantil Andina, 'rus' = RUS

/** Estado de carga por aseguradora */
export type EstadoCotizacion = 'idle' | 'cargando' | 'ok' | 'error';

// ── Formulario de cotización (datos del usuario) ──────────────

export interface DatosVehiculo {
  /** Código InfoAuto del modelo */
  infoauto: number;
  anio: number;
  /** 1 = Particular, 2 = Comercial */
  uso: number;
  gnc: boolean;
  rastreo: number;
}

export interface DatosLocalidad {
  codigo_postal: number;
}

export interface DatosCotizacion {
  localidad: DatosLocalidad;
  vehiculo: DatosVehiculo;
  cuotas: number;
  /** D = débito/tarjeta */
  tipo_pago: 'D' | 'C';
}

// ── Resultado normalizado ─────────────────────────────────────

/**
 * Cobertura normalizada que se muestra en la UI.
 * Independiente de la aseguradora de origen.
 */
export interface CoberturaResultado {
  /** Código interno de la aseguradora (ej: "B1") */
  codigoProducto: string;
  /** Nombre del plan (ej: "B1 - R.C.L.- INCENDIO TOTAL Y ROBO/HURTO TOTAL") */
  descripcion: string;
  /** Premio total final */
  premio: number;
  /** Prima neta */
  prima: number;
  /** IVA */
  iva: number;
  /** Cantidad de cuotas */
  cantidadCuotas: number;
  /** Importe de cada cuota (0 si es contado) */
  importeCuota: number;
  /** ¿Incluye granizo? */
  granizo: boolean;
  /** ¿Requiere inspección previa? */
  requiereInspeccion: boolean;
  /** Código numérico interno de la aseguradora */
  codigoInterno: number;
  /** Franquicia en pesos */
  franquicia: number;
  /** Lista de beneficios/items que cubre (Inferencia + API) */
  beneficios: string[];
  // Campos agregados para la UI (opcionales para el servicio, pero poblados en el computed)
  aseguradora?: AseguradoraId;
  nombreAseguradora?: string;
  logoUrl?: string;
}

/**
 * Resultado completo de una aseguradora, ya normalizado.
 */
export interface ResultadoAseguradora {
  aseguradora: AseguradoraId;
  /** Nombre para mostrar en la UI */
  nombreAseguradora: string;
  /** Logo de la aseguradora (ruta o URL) */
  logoUrl: string;
  estado: EstadoCotizacion;
  coberturas: CoberturaResultado[];
  /** Fecha de la cotización (ISO string) */
  fechaCotizacion: string | null;
  /** Vehículo con su nombre completo y valor de mercado */
  vehiculo?: {
    nombre: string;
    valor: number;
    sumaAsegurada: number;
  };
  error?: string;
}

/** Estado global del multicotizador */
export interface EstadoMulticotizador {
  datosCotizacion: DatosCotizacion | null;
  resultados: Record<AseguradoraId, ResultadoAseguradora>;
}
