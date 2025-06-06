import * as repo from "../repositories/link.repository.js";
import { generateShortCode } from "../utils/generateShortCode.js";

export const shortenUrl = async (originalUrl, { protocol, host }) => {
  const shortCode = generateShortCode();
  const newLink = await repo.createLink(originalUrl, shortCode);
  const shortUrl = `${protocol}://${host}/${newLink.shortCode}`;

  return shortUrl;
};

export const getOriginalUrl = async (shortCode) => {
  const link = await repo.findLinkByCode(shortCode);
  if (link) {
    await repo.incrementClicks(link.shortCode);
  }
  return link;
};
