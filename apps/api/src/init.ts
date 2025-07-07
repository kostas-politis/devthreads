import { initBaseLogger } from "@repo/logger";
import { config } from "./util/config.ts";

initBaseLogger({
  level: config.env.LOG_LEVEL,
  prettyPrint: config.env.NODE_ENV !== "production",
  correlation: true,
});
