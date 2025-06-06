import { configDotenv } from "dotenv";
import jwts from "jsonwebtoken";

configDotenv(); // Load environment variables
const secret = process.env.secret; // JWT secret from environment

// Generate JWT Token
export const gettoken = async (id) => {
  const user = jwts.sign({ id }, "deep", { expiresIn: '1h' });
  return user;
};
//Verify JWT Token
export const verifytoken = async (token) => {
  const data = jwts.verify(token,"deep")
  console.log(data);
  return data
}