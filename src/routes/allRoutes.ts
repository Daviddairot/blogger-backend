import express from "express";

import { createUser } from "../controller/authadmin";

const router = express.Router();
router.post(
    "/signup", 
    createUser
)


export default router;