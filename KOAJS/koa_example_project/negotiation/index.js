const Koa = require("koa");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const logger = require("koa-logger");
const { koaBody } = require("koa-body");
const PORT = process.env.PORT || 3000;
app.use(koaBody());
const tobi = {
  _id: "123",
  name: "tobi",
  species: "ferret",
};
app.use(logger());
const loki = {
  _id: "321",
  name: "loki",
  species: "ferret",
};

const users = {
  tobi: tobi,
  loki: loki,
};
console.log(users);
app.use(async function (ctx, next) {
  await next();
  if (!ctx.body) {
    return;
  }
  const type = ctx.accepts("json", "html", "xml", "text");
  if (type === false) {
    ctx.throw(406);
  }
  if (type === "json") {
    return;
  }
  if (type === "xml") {
    ctx.type = "xml";
    ctx.body = "<name>" + ctx.body.name + "</name>";
    return;
  }
  if (type === "html") {
    ctx.type = "html";
    ctx.body = "<h1>" + ctx.body.name + "</h1>";
    return;
  }
  ctx.type = "text";
  ctx.body = ctx.body.name;
});
app.use(async function (ctx, next) {
  await next();
  if (!ctx.body) {
    return;
  }
  delete ctx.body._id;
});
app.use(async function (ctx) {
  const name = ctx.path.slice(1);
  const user = users[name];
  ctx.body = user;
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
