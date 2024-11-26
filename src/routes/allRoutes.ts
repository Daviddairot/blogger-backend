import express from "express";

// import {  } from "../controller/authadmin.js";

const router = express.Router();
router.post("/signup", (req, res) => {
    res.send("User signup route");
})



export default router;