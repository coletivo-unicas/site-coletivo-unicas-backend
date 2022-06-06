"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProductEntity = void 0;
var product_1 = require("../../../../../domain/entity/product");
function toProductEntity(m) {
    return new product_1.ProductEntity(m.ID, m.title, m.image1, m.image2, m.image3, m.price, m.category, m.size, m.available, m.description, m.memberID, m.color);
}
exports.toProductEntity = toProductEntity;
