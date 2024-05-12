import { IUser } from "@/types/models/user.types";
import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    username: {
      type: String,
      require: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    password: {
      type: String,
      require: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password as string, 8);
    this.password = hashedPassword;
    next();
  } catch (error: any) {
    next(error);
  }
});

UserSchema.methods.tempToken = async function () {
  return await jwt.sign(
    {
      id: this._id,
    },
    process.env.TEMP_TOKEN_KEY,
    {
      expiresIn: process.env.TEMP_TOKEN_EXPIRY,
    }
  );
};

UserSchema.methods.accessToken = async function () {
  return await jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

UserSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export const User = model<IUser>("user", UserSchema);
