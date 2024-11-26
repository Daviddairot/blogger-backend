import { NextFunction, Request, Response } from "express";
import asyncTryCatch from "../services/trycatch";
import { UserRequestBody } from "../types/user";
import { confEmail } from "../services/echeck";
import User from "../models/Register";

export const createUser = asyncTryCatch(
    async (req: Request, res: Response) => {
        const { username, password, email }: UserRequestBody = req.body;

        if (!username || !password || !email) {
            throw new Error("Missing required fields");
        }

        const vemail = await confEmail(email);

        if (vemail) {
            throw new Error("Email already exists");
        }

        const user = ({
            username,
            password,
            email,
            isAdmin: false
        })
        // Save user to database or any other storage

        const storage = await User.create( user );
        res.status(201).json(storage);
    }
);
