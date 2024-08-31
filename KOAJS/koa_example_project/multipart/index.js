const os = require("os");
const path = require("path");
const Koa = require("koa");
const fs = require("fs-promise");
const { koaBody } = require("koa-body");
const app = new Koa();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(koaBody({ multipart: true }));
app.use(async function (ctx) {
  const tmpdir = path.join(os.tmpdir(), uid());
  await fs.mkdir(tmpdir);
  const filePaths = [];
  const files = ctx.request.files || {};
  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }
  ctx.body = filePaths;
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
function uid() {
  return Math.random().toString(36).slice(2);
}
