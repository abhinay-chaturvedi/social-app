import express from "express";
const router=express.Router();
import {
    getUser,
    getUserFriend,
    addRemoveFriend
} from "../controllers/user.js";
import { verfyToken } from "../middleware/auth.js";

router.get("/:id",verfyToken,getUser);
router.get("/:id/friends",verfyToken,getUserFriend);
router.patch("/:id/:friendId",verfyToken,addRemoveFriend)

export default router