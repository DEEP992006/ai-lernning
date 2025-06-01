import { configDotenv } from "dotenv"
import jwts from "jsonwebtoken"

configDotenv()
const secret = process.env.secret
export const gettoken = async (email,password) => {
    const user = jwts.sign({email,password},secret, {expiresIn: '1h'})
  return user
}
export const checktoken = async (email,password) => {
const user = jwts.sign({email,password},secret, {expiresIn: '1h'})
  return user
}
