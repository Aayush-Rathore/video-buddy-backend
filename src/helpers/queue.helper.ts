import { Queue } from "bullmq";

class QueueHelper {
  private videoQueue = new Queue("video-queue", {
    connection: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS,
    },
  });

  public async addToQueue(videoUrl: string) {
    await this.videoQueue.add("video-job", { videoUrl });
  }
}

export default new QueueHelper();
