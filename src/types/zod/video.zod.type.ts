import VideoValidation from "../../validations/video.validations";
import zod from "zod";

const videoValidation = new VideoValidation();

export type IVideoUpload = zod.infer<typeof videoValidation.videoUpload>;
