// ============================================================
// MODELOS - API ATM Seguros - SegurosAlToque
// Endpoint: POST /api/Atm/cotizar
// Protocolo original: SOAP/XML → traducido a JSON por el backend
// ============================================================

export interface AtmCotizacionRequestDto {
  /** Código de marca interno de ATM (obtenido de /api/Atm/buscar-vehiculo) */
  marca: string;
  /** Código de modelo interno de ATM (obtenido de /api/Atm/buscar-vehiculo) */
  modelo: string;
  /** Año de fabricación (formato "YYYY") */
  anioFab: string;
  /** Código postal del asegurado (4 dígitos) */
  codPostal: string;
  /** "S" = es 0km | "N" = no es 0km */
  ceroKm: string;
  /** "1" = posee alarma | "0" = no posee alarma */
  alarma: string;
  /** "1" = posee GNC | "0" = no posee GNC */
  gnc: string;
}

/** Respuesta de GET /api/Atm/buscar-vehiculo?descripcion=X */
export interface AtmBuscarVehiculoResponse {
  /** Código de marca interno de ATM */
  marca: string;
  /** Código de modelo interno de ATM */
  modelo: string;
  /** Código InfoAuto propio de ATM (distinto al de MA) */
  codInfoAuto: string;
  /** Código de uso del vehículo en ATM */
  uso: string;
}

// ── Response de ATM (estructura real del backend SegurosAlToque) ──────

/**
 * Una cobertura individual del resultado de cotización ATM.
 * Estructura real devuelta por POST /api/Atm/cotizar
 */
export interface AtmCoberturaDto {
  codigo: string;
  descripcion: string;
  prima: number;
  premio: number;
  cuotas: string;
  importeCuota: number;
  ajuste?: string | null;
  formaPago: string;
  planCot: string;
  comision?: number;
  solicitudGlm?: string | null;
}

export interface AtmCotizacionResponse {
  success: boolean;
  operacion: string | number;
  coberturas: AtmCoberturaDto[];
  mensajesError?: string[] | null;
}
