const render = require("./lib/render"); 
const logger = require("koa-logger"); 
const Router = require("@koa/router"); 
const { koaBody } = require("koa-body"); 
const Koa = require("koa"); 
const app = new Koa({proxy: true}); 
const dotenv = require("dotenv"); 
dotenv.config();
const PORT = process.env.PORT || 3000; 
// database 
const posts = []; 
// middleware 
app.use(logger()); 
// ! middleware to render 
app.use(render); 
app.use(koaBody()); 

const router = new Router();
// route definitions 
router.get('/', list).get('post/new', add).get('post/:id', show).post('/post', create); 
app.use(router.routes()); 
async function list(ctx){
    await ctx.render('list', {posts: posts}); 
}

async function create(ctx){
    const post = ctx.request.body; 
    const id = posts.push(post) - 1;
    post.created_at = new Date(); 
    post.id = id; 
    ctx.redirect('/');  
}
async function add(ctx){
    await ctx.render('new'); 
}
async function show(ctx){
    const id = ctx.params.id; 
    const post = posts[id]; 
    if(!post){
        ctx.throw('404', 'invalid post id'); 
    }
    await ctx.render('show', {
        post: post 
    })
}
app.listen(PORT, () => {
    console.log(`Listeing on http://localhost:${PORT}`); 
})
module.exports = new Koa(); 