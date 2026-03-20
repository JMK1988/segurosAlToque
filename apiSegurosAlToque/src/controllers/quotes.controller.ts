import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";
import { multiQuoteSchema } from "../schemas/quote.schema";
import { quoteAutoMulti } from "../services/multiQuote.service";

export async function quoteAutoMultiController(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const payload = multiQuoteSchema.parse(req.body);
    const traceId = String(req.headers["x-trace-id"] ?? randomUUID());
    const result = await quoteAutoMulti(payload, traceId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
