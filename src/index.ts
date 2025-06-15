import { config } from "@/util/config";
import { logger } from "@/util/logger";
import { errorHandler } from "@/util/error-handler";
import { app } from "@/entry-points/api/app";

errorHandler.listenToErrorEvents();

const server = app.listen(config.env.PORT, () => {
  logger.info(`Server running on port 3000`);
});

function exitHandler(): Promise<void> {
  return new Promise<void>((res, rej) => {
    server.close((err) => {
      if (err) rej(err);
      logger.info("Express server is terminated.");
      res();
    });
  });
}

errorHandler.setExitHandler(exitHandler);
