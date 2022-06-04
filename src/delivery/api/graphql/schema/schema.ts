import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { createEventMutation } from '../mutation/event'
import { listAchievementsQuery } from '../query/achievement'
import { listEventsQuery } from '../query/event'
import { listMembersQuery } from '../query/member'
import { listProductsQuery } from '../query/product'
import { listProjectsQuery } from '../query/project'

const schema = new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...listEventsQuery,
            ...listProjectsQuery,
            ...listMembersQuery,
            ...listAchievementsQuery,
            ...listProductsQuery
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