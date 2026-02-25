export interface RusVehiculoCotizacionDto {
  anio?: string | null;
  controlSatelital?: string | null;
  cpLocalidadGuarda?: number;
  gnc?: string | null;
  codia?: number;
  rastreoACargoRUS?: string | null;
  uso?: string | null;
}

export interface RusCotizacionRequestDto {
  codigoProductor?: number;
  codigoTipoInteres?: string | null;
  cuotas?: number;
  numeroSolicitud?: number;
  condicionFiscal?: string | null;
  tipoVigencia?: string | null;
  vehiculos?: RusVehiculoCotizacionDto[] | null;
  vigenciaDesde?: string | null;
  vigenciaHasta?: string | null;
}

export interface RusCoberturaDto {
  id: string | null;
  responsabilidadCivil: string | null;
  descripcionComercial: string;
  numeroSolicitud: string;
  codigoRC: string;
  descripcionRC: string;
  detalleCoberturaRC: string;
  codigoCasco: string;
  descripcionCasco: string;
  detalleCoberturaCasco: string;
  prima: number;
  premio: number;
  iva: number;
  sumaAsegurada: number;
  ajusteAutomatico: string;
  ajustesAutomaticosPosibles: string[];
  franquicia: number;
  auxilioMecanico: string;
  paisesLimitrofes: string;
  coberturaVida: string;
}

export interface RusCotizacionResponse {
  cantidadTotal: number;
  dtoList: RusCoberturaDto[];
}
