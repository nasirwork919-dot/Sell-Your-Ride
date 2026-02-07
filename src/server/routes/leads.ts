import { Router } from "express";
import { validateAndNormalizeLead } from "../validation/lead";

import { leadRepo } from "../storage/leadRepo";
import { getWhatsAppClient } from "../whatsapp";
import { formatLeadWhatsAppMessage } from "../whatsapp/template";
import { env } from "../env";

export const leadsRouter = Router();

leadsRouter.post("/", async (req, res) => {
  const honeypotName = env.LEAD_FORM_HONEYPOT_NAME;
  const honeypotValue = typeof req.body?.[honeypotName] === "string" ? req.body[honeypotName] : "";
  if (honeypotValue.trim().length > 0) {
    return res.status(200).json({ ok: true, status: "submitted" });
  }

  const parsed = validateAndNormalizeLead(req.body);
  if (parsed.ok === false) {
    return res.status(400).json({ ok: false, error: "Validation failed", fieldErrors: parsed.fieldErrors });
  }

  const ip = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ?? req.ip;
  const userAgent = req.headers["user-agent"];

  const created = await leadRepo.create({
    ...(parsed.data as any),
    ip,
    userAgent,
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
});

leadsRouter.get("/", (_req, res) => {
  return res.status(404).json({ ok: false, error: "Not found" });
});
