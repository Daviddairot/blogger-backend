import express from "express";

import { createUser } from "../controller/authadmin";
import { Login } from "../controller/login"
import { createPost } from "../controller/createPost";
import { getall } from "../controller/getall";
import { updatePost } from "../controller/updatePost";

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

router.patch(
    "/update", 
    updatePost
);

router.post(
    "/delete", 
    updatePost
);

export default router;