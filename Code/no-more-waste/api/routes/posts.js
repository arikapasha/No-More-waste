import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  updateVolunteer,
} from "../controllers/post.js";

const router = express.Router();

//router.get("/addpost", addPost )
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.post("/updatePost", updatePost);
router.post("/updateVolunteer", updateVolunteer);


export default router;
