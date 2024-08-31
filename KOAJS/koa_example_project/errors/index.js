const Koa = require("koa");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(async function (ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.type = "html";
    ctx.body = "<p>Something <em>exploded</em>, please contact Maru.</p>";
    ctx.app.emit("error", err, ctx);
  }
});
// response
app.use(async function () {
  throw new Error("boom boom");
});
// error handler
app.on("error", function (err) {
  if (process.env.NODE_ENv != "test") {
    console.log("set error %s to the cloud", err.message);
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
