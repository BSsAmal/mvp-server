import express from "express";
import { getPosts,createPost } from "../controllers/posts.js";
const router = express.Router();

//get Posts from db 
router.get("/", getPosts);

//post new messages in db 
router.post("/", createPost);


export default router;
