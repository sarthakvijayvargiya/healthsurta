import express from "express"
import { getProfile, loginUser, registerUser } from "../controller/userController.js";
import authUser from "../middleware/authUser.js";

const userRoute = express.Router();

userRoute.post("/register-user",registerUser)
userRoute.post("/login",loginUser)
userRoute.get("/get-profile",authUser,getProfile)

export default userRoute; 