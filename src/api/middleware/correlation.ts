import { randomUUID } from "crypto";
import type { NextFunction, Request, Response } from "express";
import { correlator } from "../../util/correlator.ts";
import { AppError } from "../../util/error.ts";

const CORRELATION_ID_HEADER = "x-correlation-id";

export function correlation(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  let correlationId = req.headers[CORRELATION_ID_HEADER];

  if (!correlationId) {
    correlationId = randomUUID();
    req.headers[CORRELATION_ID_HEADER] = correlationId;
  }

  if (Array.isArray(correlationId) || correlationId.includes(",")) {
    throw new AppError(
      `Multiple ${CORRELATION_ID_HEADER} headers not allowed.`,
      400,
    );
  }

  res.setHeader(CORRELATION_ID_HEADER, correlationId);

  correlator.run(next, correlationId);
}
