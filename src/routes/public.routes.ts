import PublicController from "@/controllers/public.controllers";
import { asyncHandler } from "@/utils/asyncHandler.utils";
import { Router, IRouter, Request, Response } from "express";

const router: IRouter = Router();
const publicController = new PublicController();

router.route("/getVideos").get(asyncHandler(publicController.AllVideo));

router.route("/getComments").get(async (req: Request, res: Response) => {
  res.send("Get comments route");
});

export default router;
