import BaseValidations from "./base.validations";
import zod from "zod";

class VideoValidation extends BaseValidations {
  public videoUpload = zod.object({
    title: this.title,
    description: this.description,
    isPublic: this.isPublic,
  });
}

export default VideoValidation;
