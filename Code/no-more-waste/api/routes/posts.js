import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  updateVolunteer,
  getRestPosts,
  getShelterPosts,
  getVolunteerPosts,
  sendTexts,
  updatePickedUp,
  updateDelivered
} from "../controllers/post.js";

const router = express.Router();

//router.get("/addpost", addPost )
router.get("/", getPosts);
router.get("/restPosts", getRestPosts);
router.get("/shelterPosts", getShelterPosts);
router.get("/volunteerPosts", getVolunteerPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.post("/deletePost", deletePost);
router.post("/updatePost", updatePost);
router.post("/updateVolunteer", updateVolunteer);
router.post("/send-text-message", sendTexts);
router.post("/pickedUp", updatePickedUp);
router.post("/delivered", updateDelivered);


export default router;
