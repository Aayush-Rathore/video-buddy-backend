import { asyncHandler } from "../utils/asyncHandler.utils";
import { Router } from "express";
import VideoControllers from "../controllers/video.controller";
import { videoHandler } from "../middleware/multer.middleware";

const router = Router();
const videoControllers = new VideoControllers();

router
  .route("/upload")
  .post(videoHandler, asyncHandler(videoControllers.upload));

export default router;
