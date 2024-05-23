import { Schema } from "mongoose";

export type IVideo = {
  title: String;
  description: String;
  url: String;
  owner: Schema.Types.ObjectId;
  views: Number;
  likes: Number;
  comments: Schema.Types.ObjectId;
  isPublic: Boolean;
  isReady: Boolean;
};
