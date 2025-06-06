import { getOriginalUrl, shortenUrl } from "../services/link.service.js";

export const createShortLink = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "URL original es requerida" });
  }

  const protocol = req.protocol;
  const host = req.get("host");

  try {
    const shortUrl = await shortenUrl(originalUrl, {
      protocol,
      host,
    });

    res.status(201).json({ shortUrl });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al crear el enlace corto" });
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const link = await getOriginalUrl(shortCode);

    if (link) {
      return res.redirect(link.originalUrl);
    } else {
      return res.status(404).send("Enlace no encontrado");
    }
  } catch (error) {
    console.error({ error });
    res.status(500).send("Error en el servidor");
  }
};
