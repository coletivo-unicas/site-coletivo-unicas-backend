"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAchievementImagesByAchievementIDResponseType = exports.achievementImageType = void 0;
var graphql_1 = require("graphql");
var error_1 = require("./error");
var achievementImageType = new graphql_1.GraphQLObjectType({
    name: 'achievmentImageType',
    fields: {
        ID: { type: graphql_1.GraphQLInt },
        image: { type: graphql_1.GraphQLString },
        achievementID: { type: graphql_1.GraphQLInt }
    }
});
exports.achievementImageType = achievementImageType;
var listAchievementImagesByAchievementIDResponseType = new graphql_1.GraphQLObjectType({
    name: 'listAchievementImagesByAchievementIDResponseType',
    fields: {
        achievementImages: { type: new graphql_1.GraphQLList(achievementImageType) },
        error: { type: error_1.errorType }
    }
});
exports.listAchievementImagesByAchievementIDResponseType = listAchievementImagesByAchievementIDResponseType;
