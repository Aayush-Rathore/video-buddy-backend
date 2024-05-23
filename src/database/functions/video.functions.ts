import { IVideoUpload } from "../../types/zod/video.zod.type";
import { Video } from "../models/video.model";

class VideoDB {
  public async uploadVideo(params: IVideoUpload, owner: string) {
    const video = await Video.create({ ...params, owner });
    return video;
  }
}

export default VideoDB;
