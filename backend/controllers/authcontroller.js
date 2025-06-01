import { gettoken, checktoken } from "../utils/jwt.js";
export const signupcontroler = async (req, res) => {
    const { email, password } = req.body
    const token = await gettoken(email, password)
    res.status(200).json({ "token": token })
}
export const signincontroller = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send("email and password are required")
    }
    try {
        const user = await checktoken(email, password)
        res.status(200).json({ "token": user })
    } catch (error) {
        console.error(error);
        res.status(400).send("invalid emai and password")
    }
}