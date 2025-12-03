import { Router } from "express";
import registerUser, { loginUser } from "../controllers/user.controller.js";

const router = Router();

// for register
router.route("/register").post(registerUser)

// for login 
router.route("/login").post(loginUser)




export default router