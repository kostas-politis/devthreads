import { loadConfig } from "@repo/config";
import { z } from "zod/v4";

const AppConfigSchema = z.object({
  DATABASE_URL: z.url(),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
  PORT: z.number(),
  NODE_ENV: z.enum(["development", "production"]),
});

export const config = loadConfig(AppConfigSchema);
