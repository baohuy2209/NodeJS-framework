const Koa = require("koa");
const app = new Koa();
const dotenv = require("dotenv");
const logger = require("koa-logger");
dotenv.config();
const PORT = process.env.PORT || 3000;
function ignoreAssets(mw) {
  return async function (ctx, next) {
    if (/(\.js|\.css|\.ico)$/.test(ctx.path)) {
      await next();
    } else {
      await mw.call(this, ctx, next);
    }
  };
}
app.use(ignoreAssets(logger()));
app.use(async function (ctx) {
  const n = ~~ctx.cookies.get("view") + 1;
  ctx.cookies.set("view", n);
  ctx.body = n + "views";
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
