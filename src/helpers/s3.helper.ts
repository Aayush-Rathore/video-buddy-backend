import { PutObjectCommandInput, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import ApiError from "../utils/apiError.utils";
import {
  StatusCode,
  StatusMessages,
  ResponseMessages,
} from "../constants/messages.constants";

class S3Helper {
  private credentials = {
    accessKeyId: process.env.AWS_S3_ACCEESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  };

  private s3Client(): S3Client {
    const s3 = new S3Client({
      endpoint: process.env.AWS_S3_END_POINT,
      credentials: this.credentials,
      region: process.env.AWS_S3_REGION,
    });
    return s3;
  }

  public async uploadToS3(file: Express.Multer.File, fileName: string) {
    try {
      const uploadParams: PutObjectCommandInput = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      };

      const s3 = this.s3Client();

      const upload: Upload = new Upload({
        client: s3,
        params: uploadParams,
      });
      const metaData = await upload.done();
      return metaData["Location"];
    } catch (error) {
      console.log(error);
      throw new ApiError(
        StatusCode.INTERNAL_ERROR,
        StatusMessages.INTERNAL_ERROR,
        ResponseMessages.INTERNAL_ERROR,
        {
          message: "This is error related to file uploading to the cloud!",
          error,
        }
      );
    }
  }
}

export default new S3Helper();
