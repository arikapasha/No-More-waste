import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"


const app = express()

app.use(express.json())
app.use("/api/auth", suthRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(25060, ()=>{
    console.log("connected")
})

