import express from "express"
const auth = express.Router()
import { gettoken,checktoken} from "../utils/jwt.js"
import { signincontroller, signupcontroler } from "../controllers/authcontroller.js"
auth.post("/signup",signupcontroler)
auth.post("/signin",signincontroller)
export default auth