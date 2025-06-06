//  Controller for New Course
import express from "express";
import { createNewCourse } from "./course_service.js";

export const newCourseController = async (req, res) => {
  const {
    name,
    description,
    difficulty,
    chapter,
    category,
    token
  } = req.body;

  const newCourse = await createNewCourse(
    name,
    description,
    difficulty,
    chapter,
    category,
    token
  );

  res.json({ new: newCourse });
};
