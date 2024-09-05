"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const config_1 = require("./config");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const app = new Koa();
// log requests
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const responseTime = Date.now() - start;
  console.log(`${ctx.status} ${ctx.method} ${ctx.url} - ${responseTime}ms`);
});
const routes_1 = require("./routes");
(0, routes_1.registerRoutes)(app);
const services_1 = require("./services");
// import { registerCatVetRoutes } from "./views/catvet";
// registerCatVetRoutes(app);
(0, services_1.registerServices)(app);
app.use(async (ctx) => {
  ctx.body = "Hello world!";
});
app.listen(config_1.config.port, () => {
  console.log(
    `Server is listening on http://localhost:${config_1.config.port}`
  );
});
