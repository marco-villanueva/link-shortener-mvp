import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import linkRoutes from "./routes/link.routes.js";
import { CORS_ORIGIN } from "./config/env.js";

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
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use("/api", linkRoutes);
app.use("/", linkRoutes);

export default app;
