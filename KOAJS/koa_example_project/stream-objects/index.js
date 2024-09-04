const Koa = require("koa");
const JSONStream = require("streaming-json-stringify");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || PORT;
const app = new Koa();
app.use(async function (ctx) {
  ctx.type = "json";
  const stream = JSONStream();
  ctx.body = JSONStream();
  stream.on("error", ctx.onerror);
  setImmediate(function () {
    stream.write({
      id: 1,
    });
    setImmediate(function () {
      stream.write({
        id: 2,
      });
      setImmediate(function () {
        stream.end(); // End the stream
      });
    });
  });
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
