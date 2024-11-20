import { PrismaClient } from "@prisma/client";

let prisma;

function prismaClientSingleton() {
  return new PrismaClient();
}

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prismaClientSingleton();
}

prisma = globalForPrisma.prisma;

export default prisma;