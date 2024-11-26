import User from "../models/Register";
import { IUser } from "../types/user";

export const confEmail = async (email: string): Promise< IUser | null > => {
    const user = await User.findOne({ email });
    return user;
};
