const Koa = require('koa'); 
const app = new Koa();
const dotenv = require("dotenv"); 
dotenv.config(); 
app.use(async function pageNotFound(ctx){
    ctx.status = 404; 
    switch (ctx.accepts('html', 'json')){
        case 'html': 
            ctx.type = 'html'; 
            ctx.body = '<p>Page not Found</p>'
            break; 
        case 'json': 
            ctx.body = {
                message: 'Page not found'
            }; 
            break; 
        default: 
        ctx.type = 'text';
        ctx.body = 'Page not found';
    }
}); 
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})