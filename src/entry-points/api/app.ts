import express, { json } from "express";
import { pinoHttp } from "pino-http";
import { logger } from "@/util/logger";
import { correlation } from "./middleware/correlation";
import { error } from "./middleware/error";

const app = express();

app.use(correlation);
app.use(json());
app.use(pinoHttp({ logger }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(error);

export { app };
