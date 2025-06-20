import { errorHandler } from "@/util/error-handler";
import type { NextFunction, Request, Response } from "express";

export function error(
  error: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  const appError = errorHandler.convertError(error);
  appError.isOperational = true;
  const { status, message, errors } = errorHandler.handleError(error);
  res.status(status).json({ status, message, errors });
}
