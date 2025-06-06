// Service to Handle Course Creation
import { db } from "../../config/dbconection.js";
import GenerateCourse from "../../config/generate_course.js";
import { verifytoken } from "../../utils/jwt.js";
import { coursesTable } from "./course_schema.js";

export const createNewCourse = async (
  name,
  description,
  difficulty,
  chapter,
  category,
  token
) => {
  const generatedCourse = await GenerateCourse(
    name,
    description,
    difficulty,
    chapter,
    category
  );

  // Get user ID from token
  const user = await verifytoken(token);

  // Insert into DB and return inserted record
  const result = await db.insert(coursesTable).values({
    name: generatedCourse.name,
    description: generatedCourse.description,
    difficulty: generatedCourse.difficulty,
    category: generatedCourse.category,
    chapters: generatedCourse.chapters,
    user_id: user.id,
  }).returning();

  return result;
};
