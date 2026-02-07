import type { Lead, Prisma } from "@prisma/client";
import { getPrisma } from "./prisma";

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

const memory: Lead[] = [] as unknown as Lead[];

function dbAvailable() {
  return Boolean(process.env.DATABASE_URL);
}

export const leadRepo = {
  async create(data: CreateLeadInput): Promise<Lead> {
    if (!dbAvailable()) {
      const now = new Date();
      const lead: Lead = {
        id: `mem_${Math.random().toString(16).slice(2)}`,
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
    }

    const prisma = getPrisma();
    return prisma.lead.create({ data });
  },

  async updateStatus(
    id: string,
    patch: { status: "whatsapp_sent" | "whatsapp_failed"; whatsappError?: string }
  ): Promise<void> {
    if (!dbAvailable()) {
      const idx = memory.findIndex((l) => l.id === id);
      if (idx >= 0) {
        (memory[idx] as any).status = patch.status;
        (memory[idx] as any).whatsappError = patch.whatsappError ?? null;
      }
      return;
    }

    const prisma = getPrisma();
    await prisma.lead.update({
      where: { id },
      data: {
        status: patch.status,
        whatsappError: patch.whatsappError,
      } satisfies Prisma.LeadUpdateInput,
    });
  },
};
