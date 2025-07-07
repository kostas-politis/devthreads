import { errorHandler } from "@repo/error/error-handler";
import type { NextFunction, Request, Response } from "express";

export function error(
  error: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  const appError = errorHandler.convertError(error);
  appError.isOperational = true;
  const { status, message, errors } = errorHandler.handleError(appError);
  res.status(status).json({ status, message, errors });
}
