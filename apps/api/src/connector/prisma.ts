import { PrismaClient } from "../generated/prisma/client.ts";
import { config } from "../util/config.ts";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaInstance = globalForPrisma.prisma ?? new PrismaClient();

if (config.NODE_ENV === "development") globalForPrisma.prisma = prismaInstance;

export const prisma = prismaInstance;
