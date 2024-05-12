import { Request, Response } from "express";
import AuthValidation from "@/utils/validation.utils";
import AuthServices from "@/services/auth.services";
import { IUser } from "@/types/models/user.types";
import ApiResponse from "@/utils/apiResponse.utils";
import {
  StatusCode,
  ResponseMessages,
  StatusMessages,
} from "@/constants/messages.constants";

const authValidation = new AuthValidation();
const authServices = new AuthServices();

class AuthController {
  public async SignUp(req: Request, res: Response) {
    authValidation.SignUpValidation(req.body);
    const user: IUser = await authServices.SignUp(req.body);
    user.password = undefined;
    // I will implement login to send email for verifying a user email to get them loged in after verification!
    new ApiResponse(
      StatusCode.SUCCESS,
      StatusMessages.SUCCESS,
      ResponseMessages.SIGN_UP_SUCCESS,
      { user },
      res
    );
  }
}

export default AuthController;
