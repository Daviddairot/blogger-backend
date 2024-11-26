import { Document } from "mongoose";


export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface UserRequestBody {
    username: string;
    password: string;
    email: string;
  }
  
//   export interface NewUser extends UserRequestBody {
//     imageUrl?: string;
//     userContext: string | undefined;
//   }

export interface HookNextFunction {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error?: Error): any;
  }