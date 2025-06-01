// import modules
import express from "express"
import cors from "cors"
import authroute from "./routes/authroute.js"
// creting mexpress app
const app = express()
app.use(express.json()) // to parse json
app.use(cors()) // to allow all cors to send request
app.use("/auth",authroute)
//get request 
app.get("/", (req, res) => {
    
    res.json({ message: "hi" })
})
//starting server
app.listen(3000, async () => {
    console.log("started")
})