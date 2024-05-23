import { Queue } from "bullmq";

class QueueHelper {
  private videoQueue = new Queue("video-queue", {
    connection: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS,
    },
  });

  public async addToQueue(videoUrl: string, videoId: string) {
    await this.videoQueue.add("video-job", { videoUrl, videoId });
  }
}

export default new QueueHelper();
