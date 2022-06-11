"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlRouter = void 0;
var express_1 = require("express");
var express_graphql_1 = require("express-graphql");
var schema_1 = require("../schema/schema");
var GraphqlRouter = /** @class */ (function () {
    function GraphqlRouter() {
        this.router = (0, express_1.Router)();
        this.router.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
            schema: schema_1.schema,
            graphiql: true,
            customFormatErrorFn: function (error) {
                return { message: error.message };
            }
        }));
    }
    GraphqlRouter.prototype.getRouter = function () {
        return this.router;
    };
    return GraphqlRouter;
}());
exports.GraphqlRouter = GraphqlRouter;
