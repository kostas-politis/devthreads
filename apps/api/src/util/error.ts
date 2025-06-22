export type ErrorDetails = {
  input: "params" | "query" | "body";
  detail: string;
  property: string;
};

export class AppError extends Error {
  readonly status: number;
  isOperational: boolean;
  errors?: ErrorDetails[];

  constructor(
    message: string,
    status: number,
    isOperational = true,
    cause?: unknown,
  ) {
    super(message, { cause });

    this.status = status;
    this.isOperational = isOperational;
  }
}

export class ValidationError extends AppError {
  constructor(errors: ErrorDetails[]) {
    super("The request is not valid", 400);
    this.errors = errors;
  }
}

export class NotFoundError extends AppError {
  constructor() {
    super("The requested resource was not found", 404);
  }
}

export class AlreadyExistsError extends AppError {
  constructor() {
    super("The resource being created already exists.", 409);
  }
}

export class InternalServerError extends AppError {
  constructor(cause: unknown) {
    super("The server encountered an unexpected error", 500, false, cause);
  }
}
