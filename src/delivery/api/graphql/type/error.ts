import { GraphQLID, GraphQLString, GraphQLObjectType } from 'graphql'

const errorType = new GraphQLObjectType({
    name: 'errorType',
    fields: {
        code: { type: GraphQLID },
        message:  { type: GraphQLString }
    }
})

export {
    errorType
}
