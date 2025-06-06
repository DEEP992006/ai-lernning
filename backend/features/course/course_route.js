// Express Setup and Course Route
import express from "express";
import { allcoursescontroller, newCourseController, viewcoursecontroller } from "./course_controller.js";

const router = express.Router();

// Create New Course Endpoint
router.post("/new", newCourseController);
router.post("/single",viewcoursecontroller)
router.post("/all",allcoursescontroller)
export default router;
