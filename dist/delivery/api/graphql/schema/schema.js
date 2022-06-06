"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_1 = require("graphql");
var event_1 = require("../mutation/event");
var achievement_1 = require("../query/achievement");
var event_2 = require("../query/event");
var member_1 = require("../query/member");
var product_1 = require("../query/product");
var project_1 = require("../query/project");
var schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields: function () { return (__assign(__assign(__assign(__assign(__assign({}, event_2.listEventsQuery), project_1.listProjectsQuery), member_1.listMembersQuery), achievement_1.listAchievementsQuery), product_1.listProductsQuery)); }
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'Mutation',
        fields: function () { return (__assign({}, event_1.createEventMutation)); }
    })
});
exports.schema = schema;
