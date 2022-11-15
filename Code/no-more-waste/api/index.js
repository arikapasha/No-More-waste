import express from "express"

const app = express()

app.use(express.json())


app.listen(25060, ()=>{
    console.log("connected")
})