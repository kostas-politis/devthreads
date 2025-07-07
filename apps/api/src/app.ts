import { createLogger } from "@repo/logger";
import express from "express";
import { pinoHttp } from "pino-http";
import { correlation } from "./middleware/correlation.ts";
import { error } from "./middleware/error.ts";
import { jsonParser } from "./middleware/jsonParser.ts";
import { userRouter } from "./routes/user-route.ts";

const logger = createLogger();
const app = express();

app.use(correlation);
app.use(jsonParser);
app.use(pinoHttp({ logger }));

app.use("/users", userRouter);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use(error);

export { app };
