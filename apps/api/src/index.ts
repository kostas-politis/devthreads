// organize-imports-ignore
import { config } from "./util/config.ts";
import { initBaseLogger, createLogger } from "@repo/logger";
import { promisify } from "util";
import { app } from "./app.ts";

async function bootstrap(): Promise<void> {
  // Step 1: Initialize base logger configuration
  initBaseLogger({
    level: config.LOG_LEVEL,
    prettyPrint: config.NODE_ENV !== "production",
    correlation: true,
  });

  const logger = createLogger();

  logger.info("Starting application...");

  // Step 2: Import error handler after logger is configured
  const { errorHandler } = await import("@repo/error/error-handler");

  // Step 4: Listen to error events
  errorHandler.listenToErrorEvents();

  // Step 5: Start the Express server
  const server = app.listen(config.PORT, () => {
    logger.info(`Express server is listening on port ${config.PORT}`);
  });

  // Step 3: Set up shutdown handler
  errorHandler.setExitHandler(async () => {
    await promisify(server.close.bind(server))();
    logger.info("Express server is terminated.");
  });
}

// Start the application
bootstrap().catch((error: unknown) => {
  console.error("Failed to start application:", error);
  process.exit(1);
});
