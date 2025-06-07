import axios from "axios"

export const Newcourseapi = async(data) => {
    const response =await axios.post("http://localhost:3000/course/new",{
    "name": data.name,
    "description": data.description,
    "difficulty": data.difficulty,
    "chapter": data.chapter,
    "category": data.category,
    "token":localStorage.getItem("token")
    })
    return response.data.id
}
