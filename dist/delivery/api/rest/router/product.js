"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
var express_1 = require("express");
var product_1 = require("../controller/product");
var ProductRouter = /** @class */ (function () {
    function ProductRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/products', new product_1.ListProductsController().listProducts);
    }
    ProductRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ProductRouter;
}());
exports.ProductRouter = ProductRouter;
