import express from "express"
import { loginUser, registerUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/register-user",registerUser)
userRoute.post("/login",loginUser)

export default userRoute; 