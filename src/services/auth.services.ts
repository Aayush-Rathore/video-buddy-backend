import UserDB from "@/database/functions/user.functions";
import { IUserLogin, IUserSignUp } from "@/types/other/zod.types";
import ApiError from "@/utils/apiError.utils";
import {
  StatusCode,
  ResponseMessages,
  StatusMessages,
} from "@/constants/messages.constants";

const userDB = new UserDB();

class AuthServices {
  public async SignUp(params: IUserSignUp) {
    const user = await userDB.FindOne({
      email: params.email,
      username: params.username,
    });
    if (user)
      throw new ApiError(
        StatusCode.DUPLICATE,
        StatusMessages.ALREADY_IN_USE,
        ResponseMessages.ALREADY_IN_USE,
        {
          message: `${
            user.email === params.email
              ? "Email " + user.email
              : "Username " + user.username
          }, Already in use!`,
        }
      );

    const createdUser = await userDB.CreateOne(params);
    if (!createdUser)
      throw new ApiError(
        StatusCode.SERVER_ERROR,
        StatusMessages.SERVER_ERROR,
        ResponseMessages.SERVER_ERROR,
        {
          message: "Something went wrong while creating a new account!",
        }
      );
    return createdUser;
  }

  public async Login(params: IUserLogin) {
    const user = await userDB.FindOne({
      email: params.email,
      username: params.username,
    });
    if (!user)
      throw new ApiError(
        StatusCode.NOT_FOUND,
        StatusMessages.NOT_FOUND,
        ResponseMessages.NOT_FOUND,
        {
          message: `User not found with ${
            params.email
              ? "Email " + params.email
              : "Username " + params.username
          }, Please try again with diffrent credentials!`,
        }
      );

    if (!user.isVerified)
      throw new ApiError(
        StatusCode.UNAUTHORIZED,
        StatusMessages.NOT_VERIFIEND,
        ResponseMessages.NOT_VERIFIEND,
        {
          message: `Email ${user.email} is not verified, Please verify your email before you login`,
        }
      );

    const isPasswordCorrect = await user.matchPassword(params.password);

    if (!isPasswordCorrect)
      throw new ApiError(
        StatusCode.INCORRECT_PASSWORD,
        StatusMessages.INCORRECT_PASSWORD,
        ResponseMessages.INCORRECT_PASSWORD,
        {
          message: "Wrong password, Please try again with different password!",
        }
      );
    return user;
  }
}

export default AuthServices;
