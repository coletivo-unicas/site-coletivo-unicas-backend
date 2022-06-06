"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var cors_1 = require("./cors");
var graphql_1 = require("./graphql");
var Router = /** @class */ (function () {
    function Router(app) {
        app.use(new cors_1.CorsRouter().getRouter());
        app.use(new graphql_1.GraphqlRouter().getRouter());
    }
    return Router;
}());
exports.Router = Router;
