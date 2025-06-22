import { AppError, InternalServerError } from "./error";
import { logger } from "./logger";

/**
 * Centralized error handler for managing application errors and process
 * signals. Handles both operational errors (expected errors that can be
 * recovered from) and catastrophic errors (unexpected errors that require
 * application shutdown).
 */
class ErrorHandler {
  private exitHandler?: () => Promise<void>;

  /**
   * Sets the exit handler function that will be called during gracefull
   * shutdown
   *
   * @example
   *   ```
   *   async function exitHandler(): Promise<void> {
   *    await promisify(server.close.bind(server))();
   *    logger.info("Express server is terminated.");
   *   }
   *   errorHandler.setExitHandler(exitHandler);
   *   ```
   *
   * @param exitHandler Function to be called before process exit.
   * @returns {void}
   */
  setExitHandler(exitHandler: () => Promise<void>): void {
    this.exitHandler = exitHandler;
  }

  /**
   * Registers event listeners for unhandled errors and termination signals.
   * Sets up handlers for:
   *
   * - `unhandledRejection`: Unhandled promise rejections
   * - `uncaughtException`: Uncaught exceptions
   * - `SIGTERM`: Termination signal (typically from process managers)
   * - `SIGINT`: Interrupt signal (typically Ctrl+C)
   */
  listenToErrorEvents(): void {
    process.on("unhandledRejection", (reason) => {
      logger.warn(
        "Unhandled Promise Rejection detected. Delegating to 'uncaughtException' handler",
      );
      throw reason;
    });

    process.on("uncaughtException", (error) => {
      this.handleError(error);
    });

    process.on("SIGTERM", () => {
      logger.error("App received SIGTERM event. Initiating gracefull shutdown");
      void this.gracefulShutdown();
    });

    process.on("SIGINT", () => {
      logger.error("App received SIGINT event. Initiating gracefull shutdown.");
      void this.gracefulShutdown();
    });
  }

  /**
   * Handles an error by logging and determining if shutdown is required.
   *
   * @param error The error to handle.
   * @returns The {@link AppError} instance after being handled.
   */
  handleError(error: unknown): AppError {
    const appError = this.convertError(error);

    if (!appError.isOperational) {
      logger.fatal(
        appError,
        "Catastrophic error detected, initiating gracefull shutdown.",
      );
      void this.gracefulShutdown();
    } else {
      logger.error(
        appError,
        "Operational error detected, continuing process execution.",
      );
    }
    return appError;
  }

  /**
   * Converts an unknown error into an {@link AppError} instance.
   *
   * @param error The error to convert.
   * @returns An {@link AppError} instance.
   */
  convertError(error: unknown): AppError {
    if (error instanceof AppError) {
      return error;
    }

    return new InternalServerError(error);
  }

  /**
   * Performs graceful shutdown of the application. Calls the {@link exitHandler}
   * if set, then exits the process.
   *
   * @returns {Promise<never>} This method never resolves as it exits the
   *   process.
   */
  private async gracefulShutdown(): Promise<never> {
    try {
      await this.exitHandler?.();
    } catch (error) {
      logger.fatal(
        "Graceful shutdown failed: exit handler threw an error.",
        error,
      );
    } finally {
      process.exit(1);
    }
  }
}

export const errorHandler = new ErrorHandler();
