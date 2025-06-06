import * as repo from "../repositories/link.repository.js";
import { generateShortCode } from "../utils/generateShortCode.js";

export const shortenUrl = async (originalUrl) => {
  const shortCode = generateShortCode();
  return await repo.createLink(originalUrl, shortCode);
};

export const getOriginalUrl = async (shortCode) => {
  const link = await repo.findLinkByCode(shortCode);
  if (link) {
    await repo.incrementClicks(link.shortCode);
  }
  return link;
};
