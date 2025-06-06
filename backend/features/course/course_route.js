// Express Setup and Course Route
import express from "express";
import { newCourseController } from "./course_controller.js";

const router = express.Router();

// Create New Course Endpoint
router.post("/new", newCourseController);

export default router;
