const koa = require("koa");
const app = new koa();
const { koaBody } = require("koa-body");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(
  koaBody({
    jsonLimit: "1kb",
  })
);
app.use(async function (ctx) {
  const body = ctx.request.body;
  if (!body.name) {
    ctx.throw(400, ".name required");
  }
  ctx.body = { name: body.name.toUpperCase() };
});
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
