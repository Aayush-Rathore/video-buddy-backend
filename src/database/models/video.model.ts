import { model, Schema } from "mongoose";
import { IVideo } from "@/types/models/video.model.type";

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  url: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },

  views: {
    type: Number,
    default: 0,
  },

  likes: {
    type: Number,
    default: 0,
  },

  comments: {
    type: Schema.Types.ObjectId,
    ref: "comments",
  },

  isPublic: {
    type: Boolean,
    default: true,
  },

  isReady: {
    type: Boolean,
    default: false,
  },
});

export const Video = model<IVideo>("video", VideoSchema);
