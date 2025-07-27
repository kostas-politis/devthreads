import { readFileSync } from "fs";
import yaml from "js-yaml";
import { join } from "path";
import type { ZodType } from "zod/v4";

export function loadConfig<T>(schema: ZodType<T>): T {
  const filePath = join(process.cwd(), "config", "config.yaml");

  const fileContent = readFileSync(filePath, "utf-8");
  const rawConfig = yaml.load(fileContent);

  const { data, error } = schema.safeParse(rawConfig);

  if (error) {
    throw new Error(`Config validaton error:`, { cause: error });
  }

  return data;
}
