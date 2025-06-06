import { GEMINI_KEY } from "../../config/env.js";
import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({apiKey: GEMINI_KEY});

async function Generate_course(name,description,difficulty,chapter,category) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents: `Generate a valid JSON object for a ${category} course edit given name desc look good has oject has name ${name} description ${description} category, diificulty ${difficulty} has array of ${chapter} chapter each chapter has  name with a "description" and , and an array "modules" containing 3 detailed modules:, . Each module must include "name", "descriptio ", and a "content" array of blocks using one of these types: "heading" (with "level" and "text"), "paragraph" (with "text"), "list" (with "items"), "code" (with "language" and "code"), or "blockquote" (with "text"). Fill the content with realistic, beginner-friendly, educational material including varied examples, text, and structure. Return only valid JSON as one compact string without any extra explanation`,
    });
    const data = response.text.replace(/```json|```/g, '').trim();
    const json = JSON.parse(data);
    console.log(json.name);
    return json
  } catch (error) {
    throw new Error("server is busy tr again"); 
  }
}

export default Generate_course