import { config } from "dotenv";

config();

export const corsOptions = {
  origin: "https://myportfolio-19a37.web.app",
  optionsSuccessStatus: 200,
  credentials: true,
};

export const PORT = process.env.PORT || 8080;

export const DB_HOST = process.env.MONGOHOST || "localhost";
export const DB_USER = process.env.MONGOUSER || "root";
export const DB_PASSWORD = process.env.MONGOPASS || "root";
export const DB_NAME = process.env.MONGODB || "Portfolio";
export const DB_URL = process.env.MONGOURL || "localhost:27017";
export const GIT = process.env.GIT || "www.google.com";
