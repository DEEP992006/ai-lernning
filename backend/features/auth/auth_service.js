import { eq } from "drizzle-orm";
import { db } from "../../config/dbconection.js";
import { gettoken } from "../../utils/jwt.js";
import { usersTable } from "./auth_schema.js";

// Create user + return token
export const signupservice = async (email, password) => {
  const result = await db
    .insert(usersTable)
    .values({ email, password })
    .returning();

  const id = result[0].id;
  const token = gettoken(id);
  return token;
};

// Check user + return token
export const signinservice = async (email, password) => {
  const data = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  // Match password
  if (data.length > 0 && data[0].password === password) {
    const token = gettoken(data[0].id);
    return token;
  } else {
    throw new Error("Invalid credentials.");
  }
};
