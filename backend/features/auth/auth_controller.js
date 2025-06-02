import { gettoken } from "../../utils/jwt.js";
import { signinservice, signupservice } from "./auth_service.js";

// Signup controller
export const signupcontroler = async (req, res) => {
  const { email, password } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).send("Both email and password are required.");
  }

  try {
    // Register user + token
    const token = await signupservice(email, password);
    res.status(201).json({ message: "User registered successfully.", token });
  } catch (error) {
    // User already exists
    if (error.cause?.code) {
      res.status(400).json({ message: "User already exists." });
    } else {
      res.status(500).json({ message: "Signup failed. Try again." });
    }
  }
};

// Signin controller
export const signincontroller = async (req, res) => {
  const { email, password } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).send("Both email and password are required.");
  }

  try {
    // Login + token
    const token = await signinservice(email, password);
    res.status(200).json({ message: "Signin successful.", token });
  } catch (error) {
    res.status(401).json({ message: "Invalid email or password." });
  }
};
