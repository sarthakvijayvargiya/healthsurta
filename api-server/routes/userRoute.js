import express from "express"
import { getProfile, loginUser, registerUser, updateProfile } from "../controller/userController.js";
import authUser from "../middleware/authUser.js";
import upload from "../middleware/multer.js";

const userRoute = express.Router();

userRoute.post("/register-user",registerUser)
userRoute.post("/login",loginUser)
userRoute.get("/get-profile",authUser,getProfile)

// TODO Check this api flow to understand
userRoute.post("/update-profile", upload.single('image') ,authUser,updateProfile)

export default userRoute; 