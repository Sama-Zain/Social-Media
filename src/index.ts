import express from "express";
import type { Express } from "express";
import  bootstrap  from "./app.controller";
import { PORT } from "./config/config.service";
const app:Express = express();
const port  = PORT;
bootstrap(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});