import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"
import { achievementImageType } from './achievement_image'
import { AchievementImageEntity } from "../../../../domain/entity/achievement_image"
import { ListAchievementImagesByAchievementIDController } from "../controller/achievement_image"

const achievementType = new GraphQLObjectType({
    name: 'achievementType',
    fields: {
        ID: { type: GraphQLInt },
        type: { type: GraphQLString },
        dateTimeStart: { type: GraphQLString },
        dateTimeEnd: { type: GraphQLString },
        modality: { type: GraphQLString },
        registration: { type: GraphQLString },
        learnMore: { type: GraphQLString },
        contributors: { type: GraphQLString },
        status: { type: GraphQLString },
        description: { type: GraphQLString },
        memberID: { type: GraphQLInt },
        projectID: { type: GraphQLInt },
        eventID: { type: GraphQLInt },
        images: {
            type: new GraphQLList(achievementImageType),
            resolve: async (params: any): Promise<AchievementImageEntity[] | null> => {
                const { ID } = params
                const response = await new ListAchievementImagesByAchievementIDController().listAchievementImagesByAchievementID({ achievementID: ID })
                return response.achievementImages || null
            }
        }
    }
})

const listAchievementsResponseType = new GraphQLObjectType({
    name: 'listAchievementsResponseType',
    fields: {
        achievements: { type: new GraphQLList(achievementType) },
        error: { type: errorType }
    }
})

export {
    listAchievementsResponseType
}