import express from "express"
import {
    getFeedPosts,
    getUserPosts,
    likePost
} from "../controllers/posts.js"
import { verfyToken } from "../middleware/auth.js";
const router=express.Router();

router.get("/",verfyToken,getFeedPosts);
router.get('/:userId/posts',verfyToken,getUserPosts);
router.patch("/:id/like",verfyToken,likePost)





export default router;