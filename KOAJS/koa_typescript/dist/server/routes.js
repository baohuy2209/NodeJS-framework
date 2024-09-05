"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const koaRouter = require("koa-router");
function registerRoutes(app) {
    const router = new koaRouter();
    router.get("/test1", async (ctx) => {
        ctx.body = "This is the first test route";
    });
    router.get("/test2/:id", async (ctx) => {
        ctx.body = {
            id: ctx.params.id,
            name: "Test Record",
            age: 3,
        };
    });
    app.use(router.routes());
}
