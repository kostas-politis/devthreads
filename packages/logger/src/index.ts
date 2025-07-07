import { correlator } from "@repo/correlator";
import type { Level, Logger, LoggerOptions } from "pino";
import { pino, stdTimeFunctions } from "pino";

type LoggerConfig = {
  level: Level;
  prettyPrint: boolean;
  correlation?: boolean;
};

let logger: Logger | null = null;

export function initBaseLogger({
  level,
  prettyPrint,
  correlation,
}: LoggerConfig): void {
  const config: LoggerOptions = {
    level: level,
    timestamp: stdTimeFunctions.isoTime,
    serializers: {
      err: pino.stdSerializers.errWithCause,
    },
    formatters: {
      level(label) {
        return { level: label };
      },
    },
  };

  if (correlation) {
    config.mixin = () => {
      const cid = correlator.getId();
      return cid ? { cid } : {};
    };
  }

  if (prettyPrint) {
    config.transport = {
      target: "pino-pretty",
      options: {
        colorize: true,
        ignore: "pid,hostname",
      },
    };
  }

  logger = pino(config);
}

export function createLogger(module?: string): pino.Logger {
  if (!logger) {
    throw new Error("Logger not initialized. Call initBaseLogger first.");
  }
  return module ? logger.child({ module }) : logger;
}
