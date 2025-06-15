// organize-imports-ignore
import { config } from "@/util/config";
import { errorHandler } from "@/util/error-handler";
import { logger } from "@/util/logger";
import { promisify } from "util";
import { app } from "@/entry-points/api/app";

errorHandler.listenToErrorEvents();

const server = app.listen(config.env.PORT, () => {
  logger.info(`Server running on port 3000`);
});

async function exitHandler(): Promise<void> {
  await promisify(server.close.bind(server))();
  logger.info("Express server is terminated.");
}

errorHandler.setExitHandler(exitHandler);
