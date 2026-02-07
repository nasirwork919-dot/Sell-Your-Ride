export type WhatsAppSendTextParams = {
  to: string;
  body: string;
};

export interface WhatsAppClient {
  sendText(params: WhatsAppSendTextParams): Promise<void>;
}
