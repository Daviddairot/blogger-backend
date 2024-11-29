import mongoose, { Document, Schema, Model, model } from "mongoose";
import { IContentPost } from "../types/posts";

const ContentPostSchema: Schema = new Schema<IContentPost>({
    contentpost: {
        type: String,
        required: true,
        maxlength: 1500,
        trim: true,
    },
    images: {
        type: [String],
        validate: {
            validator: (arr: string[]) => arr.length <= 10, // Limit to 10 images
            message: "A post can have up to 10 images only.",
        },
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

// Create the Model
const ContentPost: Model<IContentPost> = model<IContentPost>("ContentPost", ContentPostSchema);

export default ContentPost;