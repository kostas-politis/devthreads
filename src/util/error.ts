import { HttpCode } from "./http-codes";

export class AppError extends Error {
  public readonly isOperational: boolean;
  public readonly code: HttpCode;

  constructor(
    message: string,
    code: HttpCode,
    isOperational = true,
    cause?: unknown,
  ) {
    super(message, { cause });

    this.code = code;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
