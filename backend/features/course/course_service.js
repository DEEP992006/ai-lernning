// Service to Handle Course Creation
import { eq } from "drizzle-orm";
import { db } from "../../config/dbconection.js";
import GenerateCourse from "../../config/generate_course.js";
import { verifytoken } from "../../utils/jwt.js";
import { coursesTable } from "./course_schema.js";

export const createNewCourse = async (name,description,difficulty,chapter,category,token) => {
  //generate full course using ai
  try {
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
  } catch (error) {
    throw new Error("internal server error");
    
  }
  
};
export const getcourse = async (id,token) => {
const data = await db
        .select()
        .from(coursesTable)
        .where(eq(coursesTable.id,id));
    
    // const course = await db.select().from(coursesTable).where(eq(coursesTable.id,uid))
    const token_id =await verifytoken(token)
    console.log(data[0].user_id);
    console.log(token_id);
    
    if(token_id.id != data[0].user_id){
      throw new Error("token invalid");
    }
    
    return data
 
}
export const allcourse = async (token) => {
  const user =await verifytoken(token)
  const data = await db
        .select()
        .from(coursesTable)
        .where(eq(coursesTable.user_id,user.id));
        console.log(data);
        
    return data
}