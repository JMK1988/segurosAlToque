"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToProvinciaRequest = mapToProvinciaRequest;
exports.mapProvinciaResponse = mapProvinciaResponse;
function mapToProvinciaRequest(input) {
    return {
        contacto: {
            dni: input.person.dni,
            cuit: input.person.cuit ?? "",
            nombre: input.person.fullName,
            celular: input.person.phone,
            email: input.person.email,
            canal: "WEB"
        },
        ramoProducto: {
            ramo: "4",
            producto: "04100"
        },
        datosGenerales: {
            provincia: input.person.provinceCode ?? "1",
            tipoPersona: "F",
            medioDePago: input.policy.paymentMethodCode ?? "2",
            origenDePago: "VISO",
            condicionIva: "CF",
            cuit: input.person.cuit ?? "",
            vigencia: input.policy.startDateCode ?? "E",
            vigenciaTecnica: "A",
            tipoFacturacion: "F",
            moneda: "01",
            planDePago: input.policy.paymentPlanCode ?? "1",
            modoDeCalculo: "N"
        },
        bien: {
            "40007_tipo": input.vehicle.vehicleTypeCode,
            "40012_anio": input.vehicle.year,
            "40013_esOkm": input.vehicle.isZeroKm ? "S" : "N",
            "40020_marca": input.vehicle.brandCode,
            "40021_modelo": input.vehicle.modelCode,
            "40008_uso": input.vehicle.useCode,
            "40220_ValorDelVehiculo": String(input.vehicle.insuredValue),
            "900008_codPostal": Number(input.person.postalCode),
            "40086_genero": input.person.genderCode ?? "X",
            montoAccesorios: String(input.vehicle.accessoriesAmount ?? 0)
        }
    };
}
function mapProvinciaResponse(raw) {
    const plans = (raw.planes ?? []).map((plan) => {
        const firstPromo = plan.promocionesPorPlan?.[0];
        return {
            planId: plan.plan,
            planName: plan.descripcion,
            description: plan.descripcionAdicional,
            monthlyPremium: firstPromo?.premio ? Number(firstPromo.premio) : undefined,
            annualReferencePremium: undefined,
            currency: "ARS"
        };
    });
    return {
        insurer: "provincia",
        quoteNumber: raw.numeroCotizacion,
        quoteDate: raw.fechaCotizacion,
        plans,
        raw
    };
}
