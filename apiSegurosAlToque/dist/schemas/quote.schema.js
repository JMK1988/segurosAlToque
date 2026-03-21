"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiQuoteSchema = void 0;
const zod_1 = require("zod");
exports.multiQuoteSchema = zod_1.z.object({
    person: zod_1.z.object({
        dni: zod_1.z.string().min(7),
        cuit: zod_1.z.string().optional(),
        fullName: zod_1.z.string().min(3),
        email: zod_1.z.email(),
        phone: zod_1.z.string().min(6),
        postalCode: zod_1.z.string().min(3),
        provinceCode: zod_1.z.string().optional(),
        genderCode: zod_1.z.enum(["M", "F", "X"]).optional()
    }),
    vehicle: zod_1.z.object({
        year: zod_1.z.string().min(4),
        brandCode: zod_1.z.string().min(1),
        modelCode: zod_1.z.string().min(1),
        useCode: zod_1.z.string().min(1),
        vehicleTypeCode: zod_1.z.string().min(1),
        isZeroKm: zod_1.z.boolean(),
        insuredValue: zod_1.z.number().positive(),
        accessoriesAmount: zod_1.z.number().min(0).optional(),
        infoAutoCode: zod_1.z.string().optional(),
        isNational: zod_1.z.boolean().optional(),
        vehicleNameHint: zod_1.z.string().optional(),
        categoryCode: zod_1.z.string().optional(),
        fuelTypeCode: zod_1.z.string().optional(),
        colorCode: zod_1.z.string().optional(),
        gnc: zod_1.z.boolean().optional(),
        automaticAdjustPercent: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional()
    }),
    policy: zod_1.z.object({
        startDateCode: zod_1.z.string().optional(),
        paymentPlanCode: zod_1.z.string().optional(),
        paymentMethodCode: zod_1.z.string().optional()
    })
});
