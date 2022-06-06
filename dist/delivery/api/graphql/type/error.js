"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorType = void 0;
var graphql_1 = require("graphql");
var errorType = new graphql_1.GraphQLObjectType({
    name: 'errorType',
    fields: {
        code: { type: graphql_1.GraphQLID },
        message: { type: graphql_1.GraphQLString }
    }
});
exports.errorType = errorType;
