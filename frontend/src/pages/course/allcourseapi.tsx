import axios from "axios"
import { useState } from "react";
export const allcourseapi =async () => {
    const response =await axios.post("http://localhost:3000/course/all",{
    "token":localStorage.getItem("token")
}
    )

    console.log(response);

    return response.data.course
    
}