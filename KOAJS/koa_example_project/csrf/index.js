const Koa = require("koa");
const { koaBody } = require("koa-body");
const session = require("koa-session");
const CSRF = require("koa-csrf");
const Router = require("@koa/router");
const logger = require("koa-logger");
const dotenv = require("dotenv");
dotenv.config();
const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;
app.keys = ["session key", "csrf example"];
app.use(logger());
app.use(session(app));
app.use(koaBody());
app.use(new CSRF());
router.get("/token", token).post("/post", post);
app.use(router.routes());
async function token(ctx) {
  ctx.body = ctx.csrf;
  ctx.body = "Hello world";
}
async function post(ctx) {
  ctx.body = { ok: true };
}
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/token`);
});
