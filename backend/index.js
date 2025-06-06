import express from "express";
import cors from "cors";
import { CORS_ORIGIN, PORT } from "./src/config/env.js";
import { getOriginalUrl, shortenUrl } from "./src/services/link.service.js";

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || CORS_ORIGIN === "*" || origin === CORS_ORIGIN) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  if (req.originalUrl === "/favicon.ico") {
    console.log("[INFO] Petición de favicon.ico ignorada.");
    return res.status(204).json({ nope: true });
  }
  next();
});

app.post("/api/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "URL original es requerida" });
  }

  try {
    const newLink = await shortenUrl(originalUrl);

    const shortUrl = `${req.protocol}://${req.get("host")}/${
      newLink.shortCode
    }`;
    res.status(201).json({ shortUrl });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al crear el enlace corto" });
  }
});

app.get("/:shortCode", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
