import VideoDB from "@/database/functions/video.functions";

const videoDB = new VideoDB();

class PublicServices {
  public async GetAllVideos() {
    const videos = await videoDB.GetAllVideos(1, 10);
    if (videos.length) return videos;
    else return "No videos are found!";
  }
}

export default PublicServices;
