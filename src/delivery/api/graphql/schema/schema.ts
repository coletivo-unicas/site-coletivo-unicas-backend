import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { createEventMutation } from '../mutation/event'
import { listEventsQuery } from '../query/event'

const schema = new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...listEventsQuery
        })
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            ...createEventMutation
        })
    })
})

export { schema }