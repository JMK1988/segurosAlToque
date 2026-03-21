export type InsurerId = "provincia" | "san_cristobal";

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
    infoAutoCode?: string;
    /** Si no se envía, San Cristóbal asume nacional (true). */
    isNational?: boolean;
    /** Texto del vehículo (ej. nombre completo) para inferir categoría/combustible en San Cristóbal. */
    vehicleNameHint?: string;
    /** TypeList Categories (ej. Car, Car4x4, DoubleCabPickup). */
    categoryCode?: string;
    fuelTypeCode?: string;
    colorCode?: string;
    gnc?: boolean;
    /** % ajuste automático (TypeList AutomaticAdjustVehicles), ej. 10 */
    automaticAdjustPercent?: number | string;
  };
  policy: {
    startDateCode?: string;
    paymentPlanCode?: string;
    paymentMethodCode?: string;
  };
}

export interface NormalizedPlan {
  planId: string;
  planName: string;
  description?: string;
  monthlyPremium?: number;
  annualReferencePremium?: number;
  currency: string;
}

export interface NormalizedQuoteResult {
  insurer: InsurerId;
  quoteNumber?: string;
  quoteDate?: string;
  plans: NormalizedPlan[];
  raw?: unknown;
}

export interface InsurerError {
  insurer: InsurerId;
  code: string;
  message: string;
}

export interface MultiQuoteResponse {
  traceId: string;
  success: boolean;
  results: NormalizedQuoteResult[];
  errors: InsurerError[];
}

export interface QuoteConnector {
  insurer: InsurerId;
  quoteAuto(request: MultiQuoteRequest, traceId: string): Promise<NormalizedQuoteResult>;
}
