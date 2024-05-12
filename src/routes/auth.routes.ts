import { asyncHandler } from "@/utils/asyncHandler.utils";
import AuthController from "@/controllers/auth.controllers";
import { Router, IRouter, Request, Response } from "express";

const router: IRouter = Router();
const authController = new AuthController();

router.route("/signUp").post(asyncHandler(authController.SignUp));

router.route("/login").post(async (req: Request, res: Response) => {
  res.send("This is loged in route");
});

router.route("/forgetPassword").get(async (req: Request, res: Response) => {
  res.send("This is forget password route");
});

router.route("/verieyEmail").get(async (req: Request, res: Response) => {
  res.send("This is verify email route");
});

export default router;
