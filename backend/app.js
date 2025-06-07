import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import authRoute from "./features/auth/auth_route.js";
import { dbcheck } from "./config/dbconection.js";
import { PORT } from "./config/env.js";
import course_route from "./features/course/course_route.js"
import { verifytoken } from "./utils/jwt.js";
import quize_route from "./features/quiz/quiz_route.js"
// Load Environment Variables
configDotenv();

// Initialize Express App
const app = express();

// Middleware Setup
app.use(express.json()); // Enable JSON body parsing
app.use(cors());         // Enable Cross-Origin

export const getmcqcontroller = async (req,res) => {
    const {data} = req.body
    create_mcq(data)
}
// API Routes
app.use("/auth", authRoute); // Authentication routes
app.use("/course",course_route)
app.use("/mcq",quize_route)
// Test Route
app.get("/", async(req, res) => {
verifytoken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE3LCJpYXQiOjE3NDkxODkxNTcsImV4cCI6MTc0OTE5Mjc1N30.wxEF1_1669z3CTt0EFnn7Oq3YYUc45Ne7Xq2fjQGWBY")
  res.json({ message: "hi"});
});

// Start Server & Connect to DB
app.listen(PORT, async () => {
  await dbcheck(); // Check db connection

  console.log(`✅ App listening on http://localhost:${PORT}`);
});