import express, { Application, Request, Response } from "express";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
import publicRoutes from "@/routes/public.routes";
import authRoutes from "@/routes/auth.routes";
import cors from "cors";

class ExpressServer {
  private app: Application;
  private limiter: any;

  constructor() {
    this.app = express();
    this.limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: "Too Many Requests!",
    });

    this.useMiddleware();
    this.routesConfig();
  }

  private useMiddleware() {
    this.app.use(this.limiter);
    this.app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      })
    );
    this.app.use(
      express.json({
        limit: "25kb",
      })
    );

    this.app.use(
      express.urlencoded({
        extended: true,
        limit: "15kb",
      })
    );

    this.app.use(express.static("public"));

    this.app.use(cookieParser());
  }

  private routesConfig() {
    this.app.use("/api/v1/public", publicRoutes);
    this.app.use("/api/v1/auth", authRoutes);
  }

  public startServer() {
    this.app.listen(process.env.PORT, () => {
      console.log(
        `Server is successfully configured | running on PORT ${process.env.PORT}`
      );
    });
  }
}

export default new ExpressServer();
