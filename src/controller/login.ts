import { NextFunction, Request, Response } from "express";
import asyncTryCatch from "../services/trycatch";
import { UserRequestBody } from "../types/user";
import { confEmail } from "../services/echeck";
import User from "../models/Register";
import bcrypt from "bcrypt"; // Ensure bcrypt is installed
import jwt from "jsonwebtoken"; // Ensure jsonwebtoken is installed
import dotenv from "dotenv";
// import { checkPassword } from "../services/cpassword";

dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key' // Replace with a strong secret from your environment variables

export const Login = asyncTryCatch(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Check if required fields are provided
    if (!username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Find user in the database
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // Compare provided password with stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
        expiresIn: "1h", // Token expires in 1 hour
    });

    // Respond with success and token
    return res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        },
    });
});
