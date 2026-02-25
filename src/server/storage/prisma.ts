import { createRequire } from "module";

type PrismaClientLike = {
  lead: {
    create: (args: any) => Promise<any>;
    update: (args: any) => Promise<any>;
  };
};

const require = createRequire(import.meta.url);

let prisma: PrismaClientLike | null = null;

export function getPrisma(): PrismaClientLike {
  if (prisma) return prisma;

  const mod = require("@prisma/client") as any;
  const PrismaClient = mod?.PrismaClient;

  if (!PrismaClient) {
    throw new Error("PrismaClient not available. Ensure Prisma client is generated and @prisma/client is installed.");
  }

  prisma = new PrismaClient() as PrismaClientLike;
  return prisma;
}