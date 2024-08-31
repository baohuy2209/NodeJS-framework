const Koa = require("koa");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(async function (ctx) {
  ctx.body = "Hello, world!";
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
