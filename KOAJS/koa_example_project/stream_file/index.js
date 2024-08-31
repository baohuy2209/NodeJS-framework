const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const path = require("path");
const extname = path.extname;
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(async function (ctx) {
  const fpath = path.join(__dirname, ctx.path);
  const fstat = await stat(fpath);
  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
function stat(file) {
  return new Promise(function (resolve, reject) {
    fs.stat(file, function (err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}
/*
The stat() function at the bottom of app.js returns another function that will call the normal fs.stat() to get information about the named file. (The function stat() is a promise - it will ultimately return a value, although it may take a while.)
When any program yields to a function, it pauses while that function proceeds asynchronously, and eventually returns a value. When the function returns, the program resumes at that point.
In the example, app.use() starts everything off with fstat = yield stat(fpath). We say it "yields to the stat() function." That is, app.use() pauses while the stat() function begins to execute (asynchronously), and the node interpreter goes off to work on other tasks. When the fs.stat() call completes and returns a value, app.use() resumes, and sets the value of fstat to the value returned by stat().
This example also uses the createReadStream() function to create a stream which is another way to handle data (asynchronously) from a file.
this.body gets the result of the fs.createReadStream() (which is the stream's data) and sends it to the web browser client that has connected in to the URL above.
*/
