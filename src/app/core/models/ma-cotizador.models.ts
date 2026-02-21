// ============================================================
// MODELOS - API de Vehículos (InfoAuto) - SegurosAlToque
// Base URL: https://api-segurosaltoque.onrender.com
// ============================================================

/** Item devuelto por GET /api/Vehiculos/versiones */
export interface VehicleVersion {
    codInfoAuto: string;
    descripcion: string;
}

/** Respuesta de GET /api/Vehiculos/marcas */
export type VehicleBrandsResponse = string[] | {
    value: string[];
    count: number;
};

/** Respuesta de GET /api/Vehiculos/modelos?marca=X */
export type VehicleModelsResponse = string[] | {
    value: string[];
    count: number;
};

/** Respuesta de GET /api/Vehiculos/versiones?marca=X&modelo=Y */
export type VehicleVersionsResponse = VehicleVersion[] | {
    value: VehicleVersion[];
    count: number;
};

// ============================================================
// MODELOS - API Mercantil Andina (MA) - SegurosAlToque
// Endpoint: POST /api/Cotizacion/mercantilandina/test
// ============================================================

export interface MaLocalidad {
    codigo_postal: number;
}

export interface MaVehiculo {
    infoauto: number;
    anio: number;
    /** 1 = Particular, 2 = Comercial */
    uso: number;
    gnc: boolean;
    /** 0 = sin rastreo, 1 = con rastreo */
    rastreo: number;
}

export interface MaPago {
    /** D = débito/tarjeta, C = CBU */
    tipo_pago: 'D' | 'C';
}

export interface MaProductor {
    id: number;
}

export interface MercantilAndinaRequestDto {
    localidad: MaLocalidad;
    vehiculo: MaVehiculo;
    comision: number;
    bonificacion: number;
    periodo: number;
    cuotas: number;
    pago: MaPago;
    ajuste_suma: number;
    iva: number;
    desglose: boolean;
    productor?: MaProductor;
}

// ── Response de MA ────────────────────────────────────────────

export interface MaLocalidadResponse {
    id: number;
    nombre: string;
    provincia: string;
    codigo_postal: number;
}

export interface MaVehiculoResponse {
    id: number;
    nombre: string;
    anio: number;
    valor: number;
    uso: number;
    gnc: boolean;
    infoauto: number;
    rastreo: number;
}

export interface MaProductorResponse {
    id: number;
    nombre: string;
}

export interface MaDesgloseDetalle {
    prima: number;
    iva: number;
    sellados: number;
    premio: number;
    gasto_produccion: number;
    gasto_explotacion: number;
    recargo_financiero: number;
    impuestos_internos: number;
    tasa_ssn: number;
    servicios_sociales: number;
    percepcion_iibb: number;
    percepcion_iva: number;
    acrecimiento_iva: number;
    otros_impuestos: number;
    /** 0 si es al contado; importe de la cuota si es financiado */
    cuota: number;
}

export interface MaDesglose {
    total: MaDesgloseDetalle;
    cuotas: MaDesgloseDetalle[];
}

export interface MaInspeccionOpcion {
    id: string | null;
    descripcion: string | null;
}

export interface MaInspeccion {
    opciones: MaInspeccionOpcion[];
}

export interface MaAdicional {
    granizo: boolean;
}

/**
 * Un producto/cobertura del resultado de cotización MA.
 * Productos: A, B, B0, B1, B3, M BASICA, M PLUS
 */
export interface MaProductoResultado {
    numero: number;
    puntaje: number;
    producto: string;
    texto: string;
    titulo: string;
    descripcion: string;
    /** Premio total (precio final al asegurado) */
    costo: number;
    cantidad_cuotas: number;
    desglose: MaDesglose;
    error: string;
    franquicia: number;
    codigo_producto: number;
    adicional: MaAdicional;
    inspeccion: MaInspeccion;
}

export interface MaAdvertencia {
    codigo: string;
    descripcion: string;
    detalle: string[];
}

export interface MercantilAndinaResponse {
    id: number;
    rama: number;
    localidad: MaLocalidadResponse;
    vehiculo: MaVehiculoResponse;
    suma_asegurada: number;
    iva: number;
    ajuste_suma: number;
    desglose: boolean;
    periodo: number;
    cuotas: number;
    comision: number;
    bonificacion: number;
    bonificacion_extraordinaria: number;
    productor: MaProductorResponse;
    cantidad: number;
    resultado: MaProductoResultado[];
    guardar: boolean;
    advertencia: MaAdvertencia;
    fecha_cotizacion: string;
    pago: MaPago;
}
