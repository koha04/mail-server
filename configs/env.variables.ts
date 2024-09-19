import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS;
export const DB_DATABASE = process.env.DB_DATABASE;
