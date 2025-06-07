import { configDotenv } from "dotenv";
configDotenv()
export const DATABASE_URL = process.env.DATABASE_URL
export const PORT = process.env.PORT
export const JWT_SECERET = process.env.JWT_SECERET
export const GEMINI_KEY = process.env.GEMINI_KEY