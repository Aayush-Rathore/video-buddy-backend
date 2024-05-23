import { IVideoUpload } from "../types/zod/video.zod.type";
import VideoDB from "../database/functions/video.functions";
import queueHelper from "../helpers/queue.helper";
import { Video } from "../database/models/video.model";

class VideoServices {
  private videoDB = new VideoDB();
  public async uploadVideo(
    params: IVideoUpload,
    videoUrl: string,
    owner: string
  ) {
    const video = await this.videoDB.uploadVideo(params, owner);
    await queueHelper.addToQueue(videoUrl);
    return video;
  }
}

export default VideoServices;
