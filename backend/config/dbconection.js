import { usersTable } from "../features/auth/auth_schema.js";
import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_URL } from "./env.js";

// Initialize DB Connection
export const db = drizzle(DATABASE_URL);

// Check Database Connection
export const dbcheck = async () => {
  try {
    await db.select().from(usersTable);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error.message);
  }
};