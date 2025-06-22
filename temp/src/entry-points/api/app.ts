import { logger } from "@/util/logger";
import express from "express";
import { pinoHttp } from "pino-http";
import { correlation } from "./middleware/correlation";
import { error } from "./middleware/error";
import { jsonParser } from "./middleware/jsonParser";
import { userRouter } from "./routes/user-route";

const app = express();

app.use(correlation);
app.use(jsonParser);
app.use(pinoHttp({ logger }));

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(error);

export { app };
