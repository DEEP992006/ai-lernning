import { GEMINI_KEY } from "../../config/env.js";
import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({apiKey: GEMINI_KEY});

async function Generate_mcq(module) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents:`Generate a valid JSON object containing an array named "mcqs", which holds exactly 10 multiple choice questions (MCQs) strictly based on the given module:${module}. Each MCQ must have a question, 4 options, and the correct answer. Format:
{
  "question": "What is the correct way to create an array?",
  "options": ["var armr = [];", "var arr = {};", "var arr = '';", "var arr = null;"],
  "answer": "var arr = [];"
}
Only output valid JSON with 10 such questions.`
    });
    const data = response.text.replace(/```json|```/g, '').trim();
    const json = JSON.parse(data);
    console.log(json.name);
    return json
  } catch (error) {
    throw new Error("server is busy tr again"); 
  }
}

export default Generate_mcq