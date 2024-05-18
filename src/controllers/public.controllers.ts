import { Request, Response } from "express";
import PublicServices from "@/services/public.services";
import ApiResponse from "@/utils/apiResponse.utils";
import {
  ResponseMessages,
  StatusCode,
  StatusMessages,
} from "@/constants/messages.constants";
import { IVideo } from "@/types/models/video.types";

const publicServices = new PublicServices();

class PublicController {
  public async AllVideo(req: Request, res: Response) {
    const videos: string | Array<IVideo | undefined> =
      await publicServices.GetAllVideos();
    new ApiResponse(
      StatusCode.SUCCESS,
      StatusMessages.SUCCESS,
      ResponseMessages.SUCCESS,
      { videos },
      res
    );
  }
}

export default PublicController;
