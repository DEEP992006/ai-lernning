// import modules
import express from "express"
import cors from "cors"
import authroute from "./routes/authroute.js"
import { configDotenv } from "dotenv"
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema.js';
configDotenv()
const db = drizzle(process.env.DATABASE_URL);
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
    const a = await db.select().from(usersTable)
    console.log(a);
    
     
  console.log('New user created!')
    console.log("started")
})