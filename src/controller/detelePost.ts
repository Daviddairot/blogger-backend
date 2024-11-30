import { Request, Response } from "express";
import ContentPost from "../models/createPost";
import asyncTryCatch from "../services/trycatch";


export const deletePost = asyncTryCatch(
    async (req: Request, res: Response) => {
        const { _id } = req.body;
        const deletePost = await ContentPost.findOneAndDelete( _id )
        if (!deletePost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(204).json(deletePost);
    }
)