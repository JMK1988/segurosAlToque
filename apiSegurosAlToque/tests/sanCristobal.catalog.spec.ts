import {
  effectiveInfoAutoCodeForQuote,
  hasValidSanCristobalCatalogRow,
  mergeSanCristobalCatalogIntoRequest,
  normalizeVehicleCatalogRow,
  parseInfoAutoNumeric
} from "../src/connectors/san-cristobal/sanCristobal.catalog";
import type { MultiQuoteRequest } from "../src/types/quote.types";

describe("sanCristobal.catalog", () => {
  test("parseInfoAutoNumeric acepta string numérico", () => {
    expect(parseInfoAutoNumeric("1180020")).toBe(1180020);
    expect(parseInfoAutoNumeric("  999  ")).toBe(999);
  });

  test("hasValidSanCristobalCatalogRow rechaza placeholders (códigos 0)", () => {
    expect(hasValidSanCristobalCatalogRow({ codigoInfoAuto: 0, codigoReasignado: 0 })).toBe(false);
    expect(hasValidSanCristobalCatalogRow({ codigoInfoAuto: 1180020 })).toBe(true);
  });

  test("effectiveInfoAutoCodeForQuote prioriza CodigoReasignado", () => {
    expect(
      effectiveInfoAutoCodeForQuote({
        codigoInfoAuto: 100,
        codigoReasignado: 200
      })
    ).toBe("200");
    expect(
      effectiveInfoAutoCodeForQuote({
        codigoInfoAuto: 100,
        codigoReasignado: 0
      })
    ).toBe("100");
  });

  test("normalizeVehicleCatalogRow lee Pascal y camel", () => {
    const a = normalizeVehicleCatalogRow({
      CodigoInfoAuto: 1,
      CodigoReasignado: 2,
      CombustibleCodigo: "HIB",
      Categoria: "Car4x4",
      Importado: true,
      NombreCompleto: "X",
      Precio: 50000000
    });
    expect(a.combustibleCodigo).toBe("HIB");
    expect(a.importado).toBe(true);

    const b = normalizeVehicleCatalogRow({
      codigoInfoAuto: 3,
      combustibleCodigo: "NAF"
    });
    expect(b.codigoInfoAuto).toBe(3);
    expect(b.combustibleCodigo).toBe("NAF");
  });

  test("mergeSanCristobalCatalogIntoRequest aplica código SC y combustible", () => {
    const base: MultiQuoteRequest = {
      person: {
        dni: "30111222",
        fullName: "Test User",
        email: "t@test.com",
        phone: "1130000000",
        postalCode: "2000"
      },
      vehicle: {
        year: "2025",
        brandCode: "BAI",
        modelCode: "045307",
        useCode: "1",
        vehicleTypeCode: "1",
        isZeroKm: false,
        insuredValue: 20000000,
        infoAutoCode: "999"
      },
      policy: {}
    };

    const merged = mergeSanCristobalCatalogIntoRequest(base, {
      codigoInfoAuto: 999,
      codigoReasignado: 123456,
      combustibleCodigo: "HIB",
      categoria: "Car4x4",
      importado: true
    });

    expect(merged.vehicle.infoAutoCode).toBe("123456");
    expect(merged.vehicle.fuelTypeCode).toBe("HIB");
    expect(merged.vehicle.categoryCode).toBe("Car4x4");
    expect(merged.vehicle.isNational).toBe(false);
  });
});
