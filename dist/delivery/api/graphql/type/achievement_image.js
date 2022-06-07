"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievementImageType = void 0;
var graphql_1 = require("graphql");
var achievementImageType = new graphql_1.GraphQLObjectType({
    name: 'achievmentImageType',
    fields: {
        ID: { type: graphql_1.GraphQLInt },
        image: { type: graphql_1.GraphQLString },
        achievementID: { type: graphql_1.GraphQLInt }
    }
});
exports.achievementImageType = achievementImageType;
