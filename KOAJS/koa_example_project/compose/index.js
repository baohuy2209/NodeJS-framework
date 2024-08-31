const Koa = require("koa");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const compose = require("koa-compose");
const PORT = process.env.PORT || 3000;
// x-response-time
async function responseTime(ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set("X-response-Time", ms + "ms");
}
// Example result: GET /favicon.ico - 1
async function logger(ctx, next) {
  const start = new Date();

  await next();
  const ms = new Date() - start;
  if ("test" != process.env.NODE_ENV) {
    console.log("%s %s - %s", ctx.method, ctx.url, ms);
  }
}
// response
async function respond(ctx, next) {
  await next();
  if ("/" != ctx.url) {
    return;
  }
  ctx.body = "Hello World";
}
const all = compose([responseTime, logger, respond]);
app.use(all);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
