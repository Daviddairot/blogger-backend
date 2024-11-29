import { Document } from "mongoose";


export interface IContentPost extends Document {
    contentpost: string;
    images: string[]; // Array of image URLs or file paths
    createdBy: mongoose.Schema.Types.ObjectId; // Reference to the User model
    createdAt: Date;
    updatedAt?: Date; // Optional field
}