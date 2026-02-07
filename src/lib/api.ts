import { z } from "zod";

export const leadPayloadSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
  carBrand: z.string(),
  carModel: z.string(),
  manufacturingYear: z.number(),
  askingPrice: z.number(),
  kilometersDriven: z.number(),
  additionalNotes: z.string().optional(),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;

export type LeadSubmitResponse =
  | { ok: true; status: "submitted" }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

export function isLeadSubmitError(
  res: LeadSubmitResponse
): res is Extract<LeadSubmitResponse, { ok: false }> {
  return res.ok === false;
}

export async function submitLead(payload: LeadPayload, honeypot: { name: string; value: string }) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, [honeypot.name]: honeypot.value }),
  });

  const data = (await res.json().catch(() => null)) as LeadSubmitResponse | null;
  if (!data) return { ok: false as const, error: "Unexpected server response" };
  return data;
}
