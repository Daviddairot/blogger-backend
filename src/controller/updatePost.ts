import { NextFunction, Request, Response } from "express";
import asyncTryCatch from "../services/trycatch";
import ContentPost from "../models/createPost";

export const updatePost = asyncTryCatch(
  async (req: Request, res: Response) => {
    const { _id } = req.body;
    const updatePost  = await ContentPost.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
    res.status(200).json(updatePost)
  }
)