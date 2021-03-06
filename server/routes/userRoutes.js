import express from "express";
const router = express.Router();
import {authUser, registerUser, getUserProfile, updateUserProfile, getUsers} from "../controllers/userController.js";
import {protect, admin} from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getUsers)
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;
