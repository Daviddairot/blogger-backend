import { Request, Response } from "express";
import asyncTryCatch from "../services/trycatch";
import { IContentPost } from "../types/posts"
import ContentPost from "../models/createPost";


export const createPost = asyncTryCatch(
    async (req: Request, res: Response) => {
        const { contentpost, images, createdBy } = req.body;

        const post = ({
            contentpost,
            images,
            createdBy,
            createdAt: new Date(),
        })
        const newPost = await ContentPost.create(post);
        res.status(201).json(newPost);
    }
);
