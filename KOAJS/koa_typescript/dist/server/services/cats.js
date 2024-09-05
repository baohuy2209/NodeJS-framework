"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatService = void 0;
const cat_1 = require("../models/cat");
class CatService {
    async getCat() {
        return new cat_1.Cat({
            id: 1,
            name: "Felix",
            age: 2,
            likesFish: true,
        });
    }
}
exports.CatService = CatService;
