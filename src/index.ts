// organize-imports-ignore
import { config } from "./util/config.ts";
import { errorHandler } from "./util/error-handler.ts";
import { logger } from "./util/logger.ts";
import { promisify } from "util";
import { app } from "./api/app.ts";

errorHandler.listenToErrorEvents();

const server = app.listen(config.env.PORT, () => {
  logger.info(`Server running on port 3000`);
});

async function exitHandler(): Promise<void> {
  await promisify(server.close.bind(server))();
  logger.info("Express server is terminated.");
}

errorHandler.setExitHandler(exitHandler);
