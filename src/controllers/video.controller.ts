import ValidationFun from "../utils/validation.utils";
import { Request, Response } from "express";
import ApiError from "../utils/apiError.utils";
import {
  StatusCode,
  StatusMessages,
  ResponseMessages,
} from "../constants/messages.constants";
import VideoServices from "../services/video.services";
import ApiResponse from "../utils/apiResponse.utils";

class VideoControllers {
  private validationFun = new ValidationFun();
  private videoServices = new VideoServices();
  public upload = async (req: Request, res: Response) => {
    if (!req.file)
      throw new ApiError(
        StatusCode.NOT_FOUND,
        StatusMessages.NOT_FOUND,
        ResponseMessages.NOT_FOUND,
        { message: "File not found while is required" }
      );
    this.validationFun.VideoParamsValidation(req.body);
    // const videoUrl = await s3.uploadToS3(req.file, `${uuidv4()}${Date.now()}`);
    // if (!videoUrl)
    //   throw new ApiError(
    //     StatusCode.INTERNAL_ERROR,
    //     StatusMessages.INTERNAL_ERROR,
    //     ResponseMessages.INTERNAL_ERROR,
    //     {
    //       message:
    //         "Something went wrong while uploading to the cloud from the rest api server!",
    //     }
    //   );
    // await this.videoServices.uploadVideo(req.body, videoUrl);
    const video = await this.videoServices.uploadVideo(
      req.body,
      "http://video-buddy.s3.tebi.io/a170dad2-b90b-4bca-9dfa-4eda688234981716403410373",
      "664f02c13c8826b9ec058f5c"
    );
    // res.send(video);
    new ApiResponse(
      StatusCode.SUCCESS,
      StatusMessages.SUCCESS,
      ResponseMessages.VIDEO_UPLOADED,
      {
        message:
          "Video is being processed! Please wait until it is ready to stream!",
      },
      res
    );
  };
}

export default VideoControllers;
