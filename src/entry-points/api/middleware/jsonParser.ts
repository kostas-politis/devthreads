import { AppError } from "@/util/error";
import { json, type NextFunction, type Request, type Response } from "express";

type BodyParserError = Error & {
  type?: string;
  status?: number;
  statusCode?: number;
  expose?: boolean;
};

const parser = json();

export function jsonParser(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  parser(req, res, (err?: BodyParserError) => {
    if (err) {
      const status = err.status ?? err.statusCode ?? 400;
      const message = err.expose ? err.message : "Invalid request body";
      next(new AppError(message, status));
      return;
    }
    next();
  });
}
