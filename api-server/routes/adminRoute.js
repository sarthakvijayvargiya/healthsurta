import express from "express";
import { addDoctor , getAllDoctors, loginAdmin } from "../controller/adminController.js";
import upload from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor);
adminRouter.post('/login',loginAdmin);
adminRouter.post('/get-all-doctors',authAdmin,getAllDoctors)

export default adminRouter;
