import express from "express";
const auth = express.Router();

import { signincontroller, signupcontroler } from "./auth_controller.js";

// Auth Routes
auth.post("/signup", signupcontroler);
auth.post("/signin", signincontroller);

export default auth;