import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient({
    // log: ['query', 'info', 'warn', 'error'],
  });
};

const prismaClientWithoutUserScope = () => {
  return new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
    ],
  });
};

// forcing a gh action to run, again, and againm and again
declare global {
  var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
  var dbDangerousByPassScope:
    | ReturnType<typeof prismaClientWithoutUserScope>
    | undefined;
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton();
const dbDangerouslyBypassScope =
  globalThis.dbDangerousByPassScope ?? prismaClientWithoutUserScope();

export type ExtendedPrismaClient = ReturnType<typeof prismaClientSingleton>;
export type PrismaClientWithoutScope = ReturnType<
  typeof prismaClientWithoutUserScope
>;

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = db;
  globalThis.dbDangerousByPassScope = dbDangerouslyBypassScope;
}

export { db, dbDangerouslyBypassScope };
