const Koa = require("koa");
const View = require("./view");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(async function (ctx) {
  ctx.type = "html";
  ctx.body = new View(ctx);
});
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
