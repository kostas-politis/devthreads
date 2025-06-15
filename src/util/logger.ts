import { pino, stdTimeFunctions } from "pino";
import { config } from "@/util/config";
import { correlator } from "@/util/correlator";

export const logger = pino({
  level: config.env.LOG_LEVEL,
  timestamp: stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  mixin() {
    const cid = correlator.getId();
    return cid ? { cid } : {};
  },
  transport:
    config.env.NODE_ENV === "development"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            ignore: "pid,hostname",
          },
        }
      : undefined,
});
