import { Video } from "../models/video.model";

class VideoDB {
  public async GetAllVideos(pageNumber: number, pageSize: number) {
    try {
      const skip = (pageNumber - 1) * pageSize;
      const videos = await Video.find().skip(skip).limit(pageSize);
      return videos;
    } catch (error) {
      throw error;
    }
  }
}

export default VideoDB;
