import { configDotenv } from "dotenv";
import jwts from "jsonwebtoken";

configDotenv(); // Load environment variables
const secret = process.env.secret; // JWT secret from environment

// Generate JWT Token
export const gettoken = async (id) => {
  const user = jwts.sign({ id }, secret, { expiresIn: '1h' });
  return user;
};