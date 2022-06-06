"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjectsResponseType = void 0;
var graphql_1 = require("graphql");
var error_1 = require("./error");
var projectType = new graphql_1.GraphQLObjectType({
    name: 'projectType',
    fields: {
        ID: { type: graphql_1.GraphQLInt },
        title: { type: graphql_1.GraphQLString },
        location: { type: graphql_1.GraphQLString },
        donation: { type: graphql_1.GraphQLString }
    }
});
var listProjectsResponseType = new graphql_1.GraphQLObjectType({
    name: 'listProjectsResponseType',
    fields: {
        projects: { type: new graphql_1.GraphQLList(projectType) },
        error: { type: error_1.errorType }
    }
});
exports.listProjectsResponseType = listProjectsResponseType;
