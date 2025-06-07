import axios from "axios"

export const Singlecourseapi = async(id) => {
 const response = await axios.post("http://localhost:3000/course/single",{
    id:id,
    token:localStorage.getItem("token")
 })
 console.log(response.data.course[0].chapters);
 
 return response.data.course[0].chapters
}
