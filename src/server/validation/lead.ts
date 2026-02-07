import { z } from "zod";

const currentYear = new Date().getFullYear();

const phoneSchema = z
  .string()
  .min(6)
  .max(32)
  .transform((v) => v.trim())
  .refine((v) => {
    const compact = v.replace(/[\s()-]/g, "");
    const e164 = /^\+[1-9]\d{6,14}$/;
    const local = /^\d{7,15}$/;
    return e164.test(compact) || local.test(compact);
  }, "Enter a valid phone number (E.164 like +15551234567 or local digits).")
  .transform((v) => v.replace(/[\s()-]/g, ""));

export const leadSchema = z.object({
  fullName: z.string().min(2).max(80).transform((v) => v.trim()),
  phone: phoneSchema,
  carBrand: z.string().min(2).max(40).transform((v) => v.trim()),
  carModel: z.string().min(1).max(40).transform((v) => v.trim()),
  manufacturingYear: z.coerce.number().int().min(1980).max(currentYear),
  askingPrice: z.coerce.number().int().positive(),
  kilometersDriven: z.coerce.number().int().min(0),
  additionalNotes: z.string().max(800).optional().transform((v) => (v ? v.trim() : undefined)),
});

export type LeadInput = z.infer<typeof leadSchema>;

export function validateAndNormalizeLead(
  payload: unknown
): { ok: true; data: LeadInput } | { ok: false; fieldErrors: Record<string, string> } {
  const parsed = leadSchema.safeParse(payload);
  if (parsed.success) return { ok: true, data: parsed.data };

  const fieldErrors: Record<string, string> = {};
  for (const issue of parsed.error.issues) {
    const key = issue.path.join(".") || "form";
    if (!fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return { ok: false, fieldErrors };
}
