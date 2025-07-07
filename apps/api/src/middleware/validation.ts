import { ValidationError, type ErrorDetails } from "@repo/error/errors";
import type { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod/v4";

type RequestValidators = Partial<Record<ErrorDetails["input"], ZodType>>;

export function validateRequest({ body, params, query }: RequestValidators) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const errors: ErrorDetails[] = [];

    const { error: bodyError } = body?.safeParse(req.body) ?? {};
    if (bodyError) errors.push(...processZodError(bodyError, "body"));

    const { error: paramsError } = params?.safeParse(req.params) ?? {};
    if (paramsError) errors.push(...processZodError(paramsError, "params"));

    const { error: queryError } = query?.safeParse(req.query) ?? {};
    if (queryError) errors.push(...processZodError(queryError, "query"));

    if (errors.length) {
      throw new ValidationError(errors);
    }

    next();
  };
}

function processZodError(
  error: ZodError,
  input: ErrorDetails["input"],
): ErrorDetails[] {
  return error.issues.map(({ message, path }) => ({
    input,
    detail: message,
    property: path.join("/"),
  }));
}
