"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMembersResponseType = exports.memberType = void 0;
var graphql_1 = require("graphql");
var error_1 = require("./error");
var memberType = new graphql_1.GraphQLObjectType({
    name: 'memberType',
    fields: {
        ID: { type: graphql_1.GraphQLInt },
        name: { type: graphql_1.GraphQLString },
        pronoun: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLBoolean },
        currentSector: { type: graphql_1.GraphQLString },
        role: { type: graphql_1.GraphQLString },
        linkedin: { type: graphql_1.GraphQLString },
        github: { type: graphql_1.GraphQLString },
        institutionalEmail: { type: graphql_1.GraphQLString },
        personalEmail: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        course: { type: graphql_1.GraphQLString },
        entrySemester: { type: graphql_1.GraphQLString },
        studentStatus: { type: graphql_1.GraphQLString },
        phoneNumber: { type: graphql_1.GraphQLString }
    }
});
exports.memberType = memberType;
var listMembersResponseType = new graphql_1.GraphQLObjectType({
    name: 'listMembersResponseType',
    fields: {
        members: { type: new graphql_1.GraphQLList(memberType) },
        error: { type: error_1.errorType }
    }
});
exports.listMembersResponseType = listMembersResponseType;
