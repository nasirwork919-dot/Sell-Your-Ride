import { env } from "../env";
import type { WhatsAppClient } from "./types";

export function createMetaWhatsAppClient(): WhatsAppClient {
  return {
    async sendText({ to, body }) {
      if (!env.WHATSAPP_TOKEN || !env.WHATSAPP_PHONE_NUMBER_ID) {
        throw new Error("Missing WHATSAPP_TOKEN or WHATSAPP_PHONE_NUMBER_ID");
      }

      const url = `https://graph.facebook.com/v20.0/${env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body },
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Meta WhatsApp send failed: ${res.status} ${text}`);
      }
    },
  };
}
