// organize-imports-ignore
import "./init.ts";
import { errorHandler } from "@repo/error/error-handler";
import { createLogger } from "@repo/logger";
import { promisify } from "util";
import { app } from "./app.ts";
import { config } from "./util/config.ts";

errorHandler.listenToErrorEvents();

const logger = createLogger();

const server = app.listen(config.env.PORT, () => {
  logger.info(`Express server is listening on port ${config.env.PORT}`);
});

async function exitHandler(): Promise<void> {
  await promisify(server.close.bind(server))();
  logger.info("Express server is terminated.");
}

errorHandler.setExitHandler(exitHandler);
