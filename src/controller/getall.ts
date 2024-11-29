import ContentPost from "../models/createPost";
import asyncTryCatch from "../services/trycatch";
import { Request, Response } from "express";


export const getall = asyncTryCatch(
    async (req:Request, res:Response) => {
        const posts = await ContentPost.find({});
        res.json(posts);
    }
);