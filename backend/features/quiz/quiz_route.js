import express from "express"
const router = express.Router();
import { getmcqcontroller } from "./quiz_controller.js";

// Create New Mcq Endpoint
router.post("/new", getmcqcontroller );

export default router;
