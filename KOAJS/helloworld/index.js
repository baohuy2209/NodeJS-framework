const koa = require("koa"); 
const app = new koa();
const dotenv = require("dotenv");
dotenv.config(); 
const PORT = process.env.PORT || 3000;
app.use(async ctx => {
    ctx.body = "Hello, World!";
})
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})