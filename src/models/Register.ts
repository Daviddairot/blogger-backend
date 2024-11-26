import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { HookNextFunction, IUser } from "../types/user";

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Invalid email format"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre<IUser>("save", async function (next: HookNextFunction) {
    const user = this as IUser;
    if (!user.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  });
  
// Method to compare password
userSchema.methods.comparePassword = async function (
candidatePassword: string
): Promise<boolean> {
return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the model
const User = mongoose.model<IUser>("User", userSchema);

export default User;
  