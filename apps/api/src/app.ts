import express from "express";
// import { pinoHttp } from "pino-http";
import { correlation } from "./middleware/correlation";
import { error } from "./middleware/error";
import { jsonParser } from "./middleware/jsonParser";
import { userRouter } from "./routes/user-route";

const app = express();

app
  .disable("x-powered-by")
  .use(correlation)
  .use(jsonParser)
  // app.use(pinoHttp({ logger }));
  .use("/users", userRouter)
  .use("/", (req, res) => res.send("Hello World!"))
  .use(error);

export { app };
