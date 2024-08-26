const Koa = require('koa'); 
const auth = require('koa-basic-auth'); 
const app = new Koa();
app.use(async function(ctx, next) {
    try{
        await next();
    }catch(err){
        if(err.status === 401){
            ctx.status = 401; 
            ctx.set('WWW-Authenticate', 'Basic'); 
            ctx.body = 'cant haz that'; 
        }else{
            throw err; 
        }
    }
}); 
// ! auth function: It set username and password to authenticate when you visit the page at first time 
app.use(auth({name: 'tj', pass: 'tobi'})); 
app.use(async function(ctx){ 
    ctx.body = 'secret'; 

}); 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})
module.exports = new Koa(); 