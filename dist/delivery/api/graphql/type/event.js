"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEventsResponseType = exports.createEventResponseType = void 0;
var graphql_1 = require("graphql");
var error_1 = require("./error");
var eventType = new graphql_1.GraphQLObjectType({
    name: 'eventType',
    fields: {
        ID: { type: graphql_1.GraphQLInt },
        title: { type: graphql_1.GraphQLString },
        link: { type: graphql_1.GraphQLString }
    }
});
var createEventResponseType = new graphql_1.GraphQLObjectType({
    name: 'createEventResponseType',
    fields: {
        event: { type: eventType },
        error: { type: error_1.errorType }
    }
});
exports.createEventResponseType = createEventResponseType;
var listEventsResponseType = new graphql_1.GraphQLObjectType({
    name: 'listEventsResponseType',
    fields: {
        events: { type: new graphql_1.GraphQLList(eventType) },
        error: { type: error_1.errorType }
    }
});
exports.listEventsResponseType = listEventsResponseType;
