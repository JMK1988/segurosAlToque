export interface ProvinciaMultiQuoteRequest {
  person: {
    dni: string;
    cuit?: string;
    fullName: string;
    email: string;
    phone: string;
    postalCode: string;
    provinceCode?: string;
    genderCode?: 'M' | 'F' | 'X';
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
    /** false = importado (San Cristóbal). */
    isNational?: boolean;
    vehicleNameHint?: string;
    categoryCode?: string;
    fuelTypeCode?: string;
    colorCode?: string;
    gnc?: boolean;
    automaticAdjustPercent?: number | string;
  };
  policy: {
    startDateCode?: string;
    paymentPlanCode?: string;
    paymentMethodCode?: string;
  };
}

export interface ProvinciaQuotePlan {
  planId: string;
  planName: string;
  description?: string;
  monthlyPremium?: number;
  annualReferencePremium?: number;
  currency: string;
}

export interface ProvinciaQuoteResult {
  insurer: 'provincia' | 'san_cristobal';
  quoteNumber?: string;
  quoteDate?: string;
  plans: ProvinciaQuotePlan[];
}

export interface ProvinciaQuoteError {
  insurer: 'provincia' | 'san_cristobal';
  code: string;
  message: string;
}

export interface ProvinciaMultiQuoteResponse {
  traceId: string;
  success: boolean;
  results: ProvinciaQuoteResult[];
  errors: ProvinciaQuoteError[];
}
