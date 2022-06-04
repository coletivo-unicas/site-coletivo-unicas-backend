import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const eventType = new GraphQLObjectType({
    name: 'eventType',
    fields: {
        ID: { type: GraphQLInt },
        title: { type: GraphQLString },
        link: { type: GraphQLString }
    }
})

const createEventResponseType = new GraphQLObjectType({
    name: 'createEventResponseType',
    fields: {
        event: { type: eventType },
        error: { type: errorType }
    }
})

const listEventsResponseType = new GraphQLObjectType({
    name: 'listEventsResponseType',
    fields: {
        events: { type: new GraphQLList(eventType) },
        error: { type: errorType }
    }
})

export {
    createEventResponseType,
    listEventsResponseType
}