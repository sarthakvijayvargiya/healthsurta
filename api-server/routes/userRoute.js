import express from "express"
import { registerUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/register-user",registerUser)

export default userRoute; 