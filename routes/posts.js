import express from "express";
import { getPosts,createPost,updatePost, deletePost } from "../controllers/posts.js";
const router = express.Router();

//get Posts from db 
router.get("/", getPosts);

//post new messages in db 
router.post("/", createPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);


export default router;
