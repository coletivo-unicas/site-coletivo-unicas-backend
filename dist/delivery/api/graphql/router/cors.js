"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsRouter = void 0;
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var CorsRouter = /** @class */ (function () {
    function CorsRouter() {
        this.router = (0, express_1.Router)();
        this.router.options('*', (0, cors_1.default)());
        this.router.use('*', function (_, res, next) {
            res.header("Access-Control-Allow-Methods", "*");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    CorsRouter.prototype.getRouter = function () {
        return this.router;
    };
    return CorsRouter;
}());
exports.CorsRouter = CorsRouter;
