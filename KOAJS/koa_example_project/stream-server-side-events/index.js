const Koa = require("koa");
const app = new Koa();
const sse = require("./sse");
const db = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(async function (ctx) {
  ctx.req.setTimeout(Number.MAX_VALUE);
  ctx.type = "text/event-stream; charset=utf-8";
  ctx.set("Cache-Control", "no-cache");
  ctx.set("Connection", "keep-alive");

  const body = (ctx.body = sse());
  const stream = db.subscribe("some event");
  stream.pipe(body);

  const socket = ctx.socket;
  socket.on("error", close);
  socket.on("close", close);
  function close() {
    stream.unpipe(body);
    socket.removeListener("error", close);
    socket.removeListener("close", close);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
