import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorMiddleware(error: unknown, _req: Request, res: Response, _next: NextFunction): void {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      details: error.issues
    });
    return;
  }

  const err = error as { status?: number; message?: string; code?: string };
  res.status(err.status ?? 500).json({
    error: err.code ?? "INTERNAL_ERROR",
    message: err.message ?? "Unexpected error"
  });
}
