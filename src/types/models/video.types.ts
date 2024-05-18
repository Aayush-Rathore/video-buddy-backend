import { Document, Schema } from "mongoose";

export interface IVideo extends Document {
  videoUrl: string;
  videoTitle: string;
  description?: string;
  likes: number;
  dislikes: number;
  comments: Schema.Types.ObjectId;
  ownerId: Schema.Types.ObjectId;
}
