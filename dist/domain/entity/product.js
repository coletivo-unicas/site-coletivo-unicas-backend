"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseEntity = exports.ProductEntity = void 0;
var ProductEntity = /** @class */ (function () {
    function ProductEntity(ID, title, image1, image2, image3, price, category, size, available, description, memberID, color) {
        this.ID = ID;
        this.title = title;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.price = price;
        this.category = category;
        this.size = size;
        this.available = available;
        this.description = description;
        this.memberID = memberID;
        this.color = color;
    }
    return ProductEntity;
}());
exports.ProductEntity = ProductEntity;
var ProductResponseEntity = /** @class */ (function () {
    function ProductResponseEntity(ID, title, image1, image2, image3, price, category, size, available, description, color, member) {
        this.ID = ID;
        this.title = title;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.price = price;
        this.category = category;
        this.size = size;
        this.available = available;
        this.description = description;
        this.color = color;
        this.member = member;
    }
    return ProductResponseEntity;
}());
exports.ProductResponseEntity = ProductResponseEntity;
