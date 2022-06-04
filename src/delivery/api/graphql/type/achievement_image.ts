import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const achievementImageType = new GraphQLObjectType({
    name: 'achievmentImageType',
    fields: {
        ID: { type: GraphQLInt },
        image: { type: GraphQLString },
        achievementID: { type: GraphQLInt }
    }
})

const listAchievementImagesByAchievementIDResponseType = new GraphQLObjectType({
    name: 'listAchievementImagesByAchievementIDResponseType',
    fields: {
        achievementImages: { type: new GraphQLList(achievementImageType) },
        error: { type: errorType }
    }
})

export {
    achievementImageType,
    listAchievementImagesByAchievementIDResponseType
}