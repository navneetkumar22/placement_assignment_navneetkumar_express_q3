import express from "express";
const router = express.Router();
import { home, createBlog, getBlogs, updateBlog, deleteBlog } from "../controllers/blogControllers.js";


router.get('/', home);
router.post("/create", createBlog);
router.get('/blogs', getBlogs);
router.put('/blog/:id', updateBlog);
router.delete('/blog/:id', deleteBlog);

export default router;