import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql"

const achievementImageType = new GraphQLObjectType({
    name: 'achievmentImageType',
    fields: {
        ID: { type: GraphQLInt },
        image: { type: GraphQLString },
        achievementID: { type: GraphQLInt }
    }
})

export {
    achievementImageType
}