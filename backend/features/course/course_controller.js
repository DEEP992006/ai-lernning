//  Controller for New Course
import express from "express";
import { allcourse, createNewCourse, getcourse } from "./course_service.js";
export const newCourseController = async (req, res) => {
  const {
    name,
    description,
    difficulty,
    chapter,
    category,
    token
  } = req.body;
  //check if any firld missing
  if (!name | !description | !difficulty | !chapter | !category | !token) {
    res.status(400).json({ "message": "all field are required" })
  }
  //send data to sevice file

    const newCourseid = await createNewCourse(
      name,
      description,
      difficulty,
      chapter,
      category,
      token
    );
    //retuening response
    res.json({ "id": newCourseid });

};
export const viewcoursecontroller = async (req, res) => {
  //get cou
  const { id, token } = req.body
  // console.log(uid);
  
    const course = await getcourse(id, token)
     res.status(200).json({ "course": course })
  

}
export const allcoursescontroller = async (req, res) => {
  try {
    const { token } = req.body
    const course = await allcourse(token)
   return res.status(200).json({course})
    
  } catch (error) {
   res.status(400).json({"message":error.message})
  }
}