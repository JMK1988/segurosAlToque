import { Router } from "express";
import { quoteAutoMultiController } from "../controllers/quotes.controller";

export const quotesRouter = Router();

quotesRouter.post("/auto/multi", quoteAutoMultiController);
