import videoValidation from "../validations/video.validations";
import { fromZodError } from "zod-validation-error";
import ApiError from "./apiError.utils";
import {
  StatusCode,
  StatusMessages,
  ResponseMessages,
} from "../constants/messages.constants";
import { IVideoUpload } from "../types/zod/video.zod.type";
import VideoValidation from "../validations/video.validations";

class ValidationFun {
  private videoValidation = new VideoValidation();
  private validate<T>(params: T, parseFunction: (params: T) => any): void {
    try {
      parseFunction(params);
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

  public VideoParamsValidation(params: IVideoUpload) {
    this.validate(
      params,
      this.videoValidation.videoUpload.parse.bind(
        this.videoValidation.videoUpload
      )
    );
  }
}

export default ValidationFun;
