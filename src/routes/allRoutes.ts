import express from "express";

import { createUser } from "../controller/authadmin";
import { Login } from "../controller/login"
import { createPost } from "../controller/createPost";
import { getall } from "../controller/getall";

const router = express.Router();
router.post(
    "/signup", 
    createUser
);

router.post(
    "/login", 
    Login
);

router.post(
    "/create_post", 
    createPost
);


router.get(
    "/post", 
    getall
);


export default router;