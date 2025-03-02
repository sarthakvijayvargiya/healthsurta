import express from "express"
import { getProfile, loginUser, registerUser, updateProfile ,bookAppointment, listAppointment} from "../controller/userController.js";
import authUser from "../middleware/authUser.js";
import upload from "../middleware/multer.js";

const userRoute = express.Router();

userRoute.post("/register-user",registerUser)
userRoute.post("/login",loginUser)
userRoute.get("/get-profile",authUser,getProfile)

// TODO Check this api flow to understand
userRoute.post("/update-profile", upload.single('image') ,authUser,updateProfile)
// TODO Check this api flow to understand
userRoute.post('/book-appointment',authUser,bookAppointment);
userRoute.get('/appointments',authUser,listAppointment);

export default userRoute; 