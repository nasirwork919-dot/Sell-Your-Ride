import { env } from "../env";
import type { WhatsAppClient } from "./types";

export function createTwilioWhatsAppClient(): WhatsAppClient {
  return {
    async sendText({ to, body }) {
      if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN || !env.TWILIO_WHATSAPP_FROM) {
        throw new Error("Missing TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN/TWILIO_WHATSAPP_FROM");
      }

      const url = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
      const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`);

      const form = new URLSearchParams();
      form.set("From", env.TWILIO_WHATSAPP_FROM);
      form.set("To", to.startsWith("whatsapp:") ? to : `whatsapp:${to}`);
      form.set("Body", body);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Twilio WhatsApp send failed: ${res.status} ${text}`);
      }
    },
  };
}
