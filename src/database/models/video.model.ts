import { Schema, model } from "mongoose";
import { IVideo } from "@/types/models/video.types";

const VideoSchema = new Schema({
  videoUrl: {
    type: String,
    require: true,
  },

  videoTitle: {
    type: String,
    require: true,
  },

  description: String,

  likes: {
    type: Number,
    default: 0,
  },

  dislikes: {
    type: Number,
    default: 0,
  },

  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comments",
    require: true,
  },

  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

export const Video = model<IVideo>("video", VideoSchema);
