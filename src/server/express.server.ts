import express, { Application } from "express";
import { rateLimit } from "express-rate-limit";
import cors from "cors";
import cookieParser from "cookie-parser";

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

  public startServer() {
    this.app.listen(process.env.PORT, () => {
      console.log(
        `Server is successfully configured | running on PORT ${process.env.PORT}`
      );
    });
  }
}

export default new ExpressServer();
