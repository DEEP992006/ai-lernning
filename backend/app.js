import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import authRoute from "./features/auth/auth_route.js";
import { dbcheck } from "./config/dbconection.js";
import { PORT } from "./config/env.js";

// Load Environment Variables
configDotenv();

// Initialize Express App
const app = express();

// Middleware Setup
app.use(express.json()); // Enable JSON body parsing
app.use(cors());         // Enable Cross-Origin

// API Routes
app.use("/auth", authRoute); // Authentication routes

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

// Start Server & Connect to DB
app.listen(PORT, async () => {
  await dbcheck(); // Check db connection
  console.log(`✅ App listening on http://localhost:${PORT}`);
});