import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createLink = async (originalUrl, shortCode) => {
  return await prisma.link.create({
    data: {
      originalUrl,
      shortCode,
    },
  });
};

export const findLinkByCode = async (shortCode) => {
  return await prisma.link.findUnique({
    where: { shortCode },
  });
};

export const incrementClicks = async (shortCode) => {
  await prisma.link.update({
    where: { shortCode },
    data: { clicks: { increment: 1 } },
  });
};
