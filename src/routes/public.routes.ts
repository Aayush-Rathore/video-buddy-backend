import { Router, IRouter, Request, Response } from "express";

const router: IRouter = Router();

router
  .route("/getVideos")
  .get(async (req: Request, res: Response): Promise<void> => {
    res.send("Get videos route");
  });

router.route("/getComments").get(async (req: Request, res: Response) => {
  res.send("Get comments route");
});

export default router;
