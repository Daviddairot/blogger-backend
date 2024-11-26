import express from "express";

import { createUser } from "../controller/authadmin";
import { Login } from "../controller/login"

const router = express.Router();
router.post(
    "/signup", 
    createUser
);

router.post(
    "/login", 
    Login
);


export default router;