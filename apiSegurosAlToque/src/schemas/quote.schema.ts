import { z } from "zod";

export const multiQuoteSchema = z.object({
  person: z.object({
    dni: z.string().min(7),
    cuit: z.string().optional(),
    fullName: z.string().min(3),
    email: z.email(),
    phone: z.string().min(6),
    postalCode: z.string().min(3),
    provinceCode: z.string().optional(),
    genderCode: z.enum(["M", "F", "X"]).optional()
  }),
  vehicle: z.object({
    year: z.string().min(4),
    brandCode: z.string().min(1),
    modelCode: z.string().min(1),
    useCode: z.string().min(1),
    vehicleTypeCode: z.string().min(1),
    isZeroKm: z.boolean(),
    insuredValue: z.number().positive(),
    accessoriesAmount: z.number().min(0).optional(),
    infoAutoCode: z.string().optional(),
    isNational: z.boolean().optional(),
    vehicleNameHint: z.string().optional(),
    categoryCode: z.string().optional(),
    fuelTypeCode: z.string().optional(),
    colorCode: z.string().optional(),
    gnc: z.boolean().optional(),
    automaticAdjustPercent: z.union([z.number(), z.string()]).optional()
  }),
  policy: z.object({
    startDateCode: z.string().optional(),
    paymentPlanCode: z.string().optional(),
    paymentMethodCode: z.string().optional()
  })
});

export type MultiQuoteSchema = z.infer<typeof multiQuoteSchema>;
