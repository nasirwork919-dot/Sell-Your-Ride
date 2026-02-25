import type { VercelRequest, VercelResponse } from "@vercel/node";
import { validateAndNormalizeLead } from "../src/server/validation/lead";
import { leadRepo } from "../src/server/storage/leadRepo";
import { getWhatsAppClient } from "../src/server/whatsapp";
import { formatLeadWhatsAppMessage } from "../src/server/whatsapp/template";
import { env } from "../src/server/env";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.status(404).json({ ok: false, error: "Not found" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const honeypotName = env.LEAD_FORM_HONEYPOT_NAME;
  const body = req.body ?? {};
  const honeypotValue = typeof (body as any)?.[honeypotName] === "string" ? (body as any)[honeypotName] : "";
  if (honeypotValue.trim().length > 0) {
    return res.status(200).json({ ok: true, status: "submitted" });
  }

  const parsed = validateAndNormalizeLead(body);
  if (parsed.ok === false) {
    return res.status(400).json({ ok: false, error: "Validation failed", fieldErrors: parsed.fieldErrors });
  }

  const ip =
    (typeof req.headers["x-forwarded-for"] === "string" ? req.headers["x-forwarded-for"] : undefined)
      ?.split(",")[0]
      ?.trim() ?? null;

  const userAgent = typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : null;

  const created = await leadRepo.create({
    ...(parsed.data as any),
    ip: ip ?? undefined,
    userAgent: userAgent ?? undefined,
  });

  const adminPhone = env.ADMIN_WHATSAPP_PHONE;
  const wa = getWhatsAppClient();
  const message = formatLeadWhatsAppMessage({ lead: created, now: new Date() });

  try {
    await wa.sendText({ to: adminPhone, body: message });
    await leadRepo.updateStatus(created.id, { status: "whatsapp_sent" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown WhatsApp error";
    await leadRepo.updateStatus(created.id, { status: "whatsapp_failed", whatsappError: msg });
    // eslint-disable-next-line no-console
    console.error("[whatsapp] send failed", e);
  }

  return res.status(200).json({ ok: true, status: "submitted" });
}