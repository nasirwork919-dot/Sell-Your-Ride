import { randomUUID } from "crypto";

type LeadStatus = "submitted" | "whatsapp_sent" | "whatsapp_failed";

type LeadRecord = {
  id: string;
  fullName: string;
  phone: string;
  carBrand: string;
  carModel: string;
  manufacturingYear: number;
  askingPrice: number;
  kilometersDriven: number;
  additionalNotes: string | null;
  status: LeadStatus;
  whatsappError: string | null;
  ip: string | null;
  userAgent: string | null;
  createdAt: Date;
};

type CreateLeadInput = {
  fullName: string;
  phone: string;
  carBrand: string;
  carModel: string;
  manufacturingYear: number;
  askingPrice: number;
  kilometersDriven: number;
  additionalNotes?: string;
  ip?: string;
  userAgent?: string;
};

const memory: LeadRecord[] = [];

function makeId() {
  try {
    return `mem_${randomUUID()}`;
  } catch {
    return `mem_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
  }
}

export const leadRepo = {
  async create(data: CreateLeadInput): Promise<LeadRecord> {
    const now = new Date();
    const lead: LeadRecord = {
      id: makeId(),
      fullName: data.fullName,
      phone: data.phone,
      carBrand: data.carBrand,
      carModel: data.carModel,
      manufacturingYear: data.manufacturingYear,
      askingPrice: data.askingPrice,
      kilometersDriven: data.kilometersDriven,
      additionalNotes: data.additionalNotes ?? null,
      status: "submitted",
      whatsappError: null,
      ip: data.ip ?? null,
      userAgent: data.userAgent ?? null,
      createdAt: now,
    };

    memory.push(lead);
    return lead;
  },

  async updateStatus(
    id: string,
    patch: { status: Exclude<LeadStatus, "submitted">; whatsappError?: string }
  ): Promise<void> {
    const idx = memory.findIndex((l) => l.id === id);
    if (idx >= 0) {
      memory[idx].status = patch.status;
      memory[idx].whatsappError = patch.whatsappError ?? null;
    }
  },
};