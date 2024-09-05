"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetService = void 0;
class VetService {
    async examineCat(cat) {
        console.log(`Examining '${cat.name}'...`);
        return `All good, just furballs :-)`;
    }
}
exports.VetService = VetService;
