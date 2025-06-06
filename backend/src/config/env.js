import dotenv from "dotenv";

dotenv.config();

export const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
export const PORT = process.env.PORT || 3001;
