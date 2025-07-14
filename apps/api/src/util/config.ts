import { z } from "zod/v4";

const EnvVarsSchema = z.object({
  DATABASE_URL: z.url().default("mongodb://localhost:27017/devthreads"),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace"])
    .default("debug"),
  PORT: z.number().default(4000),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

const { data, error } = EnvVarsSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validaton error:`, { cause: error });
}

export const config = Object.freeze({ env: data });
