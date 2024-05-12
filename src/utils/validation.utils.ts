import {
  StatusCode,
  ResponseMessages,
  StatusMessages,
} from "@/constants/messages.constants";
import { IUserSignUp } from "@/types/other/zod.types";
import AuthValidations from "@/validations/auth.validations";
import ApiError from "@/utils/apiError.utils";
import { fromZodError } from "zod-validation-error";

class AuthValidation {
  private authValidations = new AuthValidations();
  public SignUpValidation(params: IUserSignUp) {
    try {
      this.authValidations.SignUp.parse(params);
    } catch (error: any) {
      const validationError = fromZodError(error);
      throw new ApiError(
        StatusCode.VALIDATION_ERROR,
        StatusMessages.VALIDATION_ERROR,
        ResponseMessages.VALIDATION_ERROR,
        validationError
      );
    }
  }
}

export default AuthValidation;
