import * as repo from "../repositories/link.repository.js";
import { generateShortCode } from "../utils/generateShortCode.js";
import { normalizeUrl } from "../utils/normalizeUrl.js";

export const shortenUrl = async (originalUrl, { protocol, host }) => {
  const normalizedUrl = normalizeUrl(originalUrl);
  const shortCode = generateShortCode();
  const newLink = await repo.createLink(normalizedUrl, shortCode);
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
