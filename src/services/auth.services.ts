import UserDB from "@/database/functions/user.functions";
import { IUserSignUp } from "@/types/other/zod.types";
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
}

export default AuthServices;
