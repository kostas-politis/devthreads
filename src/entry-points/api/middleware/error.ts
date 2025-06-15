import { errorHandler } from "@/util/error-handler";
import type { NextFunction, Request, Response } from "express";

export function error(
  error: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  const { code, message } = errorHandler.handleError(error);
  res.status(code).json({ code, message });
}
