"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provincia_mapper_1 = require("../src/connectors/provincia/provincia.mapper");
const sanCristobal_mapper_1 = require("../src/connectors/san-cristobal/sanCristobal.mapper");
describe("mappers", () => {
    test("maps provincia response", () => {
        const mapped = (0, provincia_mapper_1.mapProvinciaResponse)({
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
        const mapped = (0, sanCristobal_mapper_1.mapSanCristobalResponse)({
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
});
