import express from "express"
import { addPost } from "../controllers/post.js"

const router = express.Router()

router.post("/addpost", addPost )


export default router 