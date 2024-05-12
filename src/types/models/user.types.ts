import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  isVerified: boolean;

  tempToken(): Promise<string>;
  accessToken(): Promise<string>;
  matchPassword(password: string): Promise<boolean>;
}
