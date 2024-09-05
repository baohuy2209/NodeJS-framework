"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerServices = registerServices;
const cats_1 = require("./cats");
const vet_1 = require("./vet");
function registerServices(app) {
    app.use(async (ctx, next) => {
        ctx.services = {
            cats: new cats_1.CatService(),
            vet: new vet_1.VetService(), // Create an instance of VetService
        };
        await next();
    });
}
