import { mapProvinciaResponse } from "../src/connectors/provincia/provincia.mapper";
import { mapSanCristobalRequest, mapSanCristobalResponse } from "../src/connectors/san-cristobal/sanCristobal.mapper";
import { inferArFromPostalCode, resolveSanCristobalArState } from "../src/connectors/san-cristobal/sanCristobalLocation";
import { resolveScCategory, resolveScUsage } from "../src/connectors/san-cristobal/sanCristobalVehicleCodes";
import type { MultiQuoteRequest } from "../src/types/quote.types";
import { keysToDotnetCamelCaseJson } from "../src/utils/dotnetCamelCaseJson";

describe("mappers", () => {
  test("maps provincia response", () => {
    const mapped = mapProvinciaResponse({
      numeroCotizacion: "123",
      fechaCotizacion: "19/03/2026",
      planes: [
        {
          plan: "22",
          descripcion: "TERCEROS COMPLETOS FULL",
          promocionesPorPlan: [{ premio: "145000" }]
        }
      ]
    });

    expect(mapped.insurer).toBe("provincia");
    expect(mapped.plans[0].monthlyPremium).toBe(145000);
  });

  test("maps san cristobal response", () => {
    const mapped = mapSanCristobalResponse({
      quoteNumber: "ABC",
      quoteDate: "2026-03-19",
      plans: [
        {
          planId: "1",
          planName: "Todo Riesgo",
          premioMensual: 50000
        }
      ]
    });

    expect(mapped.insurer).toBe("san_cristobal");
    expect(mapped.plans).toHaveLength(1);
    expect(mapped.plans[0].monthlyPremium).toBe(50000);
  });

  test("maps san cristobal QuoteCA7 Summaries (annual premium / 12 → monthly)", () => {
    const mapped = mapSanCristobalResponse({
      Summaries: [
        {
          QuoteId: "Q-1",
          ProductCode: "CA7_Basic",
          ProductOffering: "Básico",
          TotalPremium: { Amount: 1_200_000, Currency: "ARS" },
          DeductibleTypeDescription: "Franquicia 10%"
        }
      ]
    });

    expect(mapped.quoteNumber).toBe("Q-1");
    expect(mapped.plans).toHaveLength(1);
    expect(mapped.plans[0].planId).toBe("CA7_Basic");
    expect(mapped.plans[0].planName).toBe("Básico");
    expect(mapped.plans[0].description).toBe("Franquicia 10%");
    expect(mapped.plans[0].annualReferencePremium).toBe(1_200_000);
    expect(mapped.plans[0].monthlyPremium).toBe(100_000);
    expect(mapped.plans[0].currency).toBe("ARS");
  });

  test("maps san cristobal Summaries with camelCase keys", () => {
    const mapped = mapSanCristobalResponse({
      summaries: [
        {
          quoteId: "q2",
          productCode: "CA7_A",
          productOffering: "Plan A",
          totalPremium: { amount: 600_000, currency: "ARS" }
        }
      ]
    } as Record<string, unknown>);

    expect(mapped.quoteNumber).toBe("q2");
    expect(mapped.plans[0].monthlyPremium).toBe(50_000);
  });

  test("san cristobal location: Rosario CP → Santa Fe", () => {
    expect(inferArFromPostalCode("2000")).toBe("AR_19");
    expect(resolveSanCristobalArState("2000", "1")).toBe("AR_19");
  });

  test("san cristobal vehicle codes: usage and category from typelists", () => {
    expect(resolveScUsage("2")).toBe("Comercial");
    expect(resolveScUsage("1")).toBe("Personal");

    const hilux: MultiQuoteRequest = {
      person: {
        dni: "30111222",
        fullName: "Test User",
        email: "t@test.com",
        phone: "1130000000",
        postalCode: "2000"
      },
      vehicle: {
        year: "2024",
        brandCode: "TOY",
        modelCode: "123",
        useCode: "1",
        vehicleTypeCode: "1",
        isZeroKm: false,
        insuredValue: 20_000_000,
        vehicleNameHint: "TOYOTA HILUX 2.4 DC 4X4"
      },
      policy: {}
    };
    expect(resolveScCategory(hilux)).toBe("DoubleCabPickup");
  });

  test("san cristobal CA7 VehicleInfo uses InfoautoCode (JSON infoautoCode) and AR state from CP", () => {
    const req: MultiQuoteRequest = {
      person: {
        dni: "30111222",
        fullName: "Test",
        email: "t@test.com",
        phone: "1130000000",
        postalCode: "1425",
        provinceCode: "1",
        genderCode: "M"
      },
      vehicle: {
        year: "2025",
        brandCode: "BAI",
        modelCode: "999999",
        useCode: "1",
        vehicleTypeCode: "1",
        isZeroKm: false,
        insuredValue: 20000000,
        infoAutoCode: "1180020",
        isNational: false
      },
      policy: {}
    };
    const mapped = mapSanCristobalRequest(req) as {
      VehicleData: {
        Vehicle: {
          InfoautoCode: string;
          IsNational: boolean;
          RiskLocationState: string;
          Usage: string;
          Category: string;
          Color: string;
          FuelType: string;
          AutomaticAdjust: number;
        };
        Product: { ProductCode: string }[];
      };
      PolicyData: { LocationState: string; CommercialAlternative: string; PolicyType: string; Product: string };
    };
    expect(mapped.VehicleData.Vehicle.InfoautoCode).toBe("1180020");
    expect(mapped.VehicleData.Vehicle.IsNational).toBe(false);
    expect(mapped.PolicyData.LocationState).toBe("AR_02");
    expect(mapped.VehicleData.Vehicle.RiskLocationState).toBe("AR_02");
    expect(mapped.PolicyData.PolicyType).toBe("CA7CommAuto");
    expect(mapped.PolicyData.Product).toBe("CA7CommAuto");
    expect(mapped.VehicleData.Product).toEqual([{ ProductCode: "CA7_Basic" }]);
    expect(mapped.PolicyData.CommercialAlternative).toBe("10");
    expect(mapped.VehicleData.Vehicle.Usage).toBe("Personal");
    expect(mapped.VehicleData.Vehicle.Category).toBe("Car");
    expect(mapped.VehicleData.Vehicle.Color).toBe("White");
    expect(mapped.VehicleData.Vehicle.FuelType).toBe("NAF");
    expect(mapped.VehicleData.Vehicle.AutomaticAdjust).toBe(10);

    const json = keysToDotnetCamelCaseJson(mapped) as {
      vehicleData: { vehicle: { infoautoCode: string; infoAutoCode?: string } };
      insuredData: { uIFObligated: boolean; uifObligated?: boolean };
      policyData: { currencyCode: string };
    };
    expect(json.vehicleData.vehicle.infoautoCode).toBe("1180020");
    expect(json.vehicleData.vehicle.infoAutoCode).toBeUndefined();
    expect(json.insuredData.uIFObligated).toBe(false);
    expect(json.insuredData.uifObligated).toBeUndefined();
    expect(json.policyData.currencyCode).toBe("ARS");
  });
});
