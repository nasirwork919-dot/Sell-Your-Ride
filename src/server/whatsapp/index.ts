import { env } from "../env";
import { createMetaWhatsAppClient } from "./metaClient";
import { createTwilioWhatsAppClient } from "./twilioClient";
import type { WhatsAppClient } from "./types";

export function getWhatsAppClient(): WhatsAppClient {
  if (env.WHATSAPP_PROVIDER === "twilio") return createTwilioWhatsAppClient();
  return createMetaWhatsAppClient();
}
