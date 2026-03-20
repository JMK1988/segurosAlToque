import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { catalogRouter } from "./routes/catalog.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { quotesRouter } from "./routes/quotes.routes";
import { logger } from "./utils/logger";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: "1mb" }));
  app.use(pinoHttp({ logger }));

  app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
  });

  app.use("/api/v1/catalog", catalogRouter);
  app.use("/api/v1/quotes", quotesRouter);
  app.use(errorMiddleware);

  return app;
}
