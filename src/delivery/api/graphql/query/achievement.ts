import { ListAchievementsUseCaseResponse } from "../../../../domain/usecase/ucio/achievement"
import { ListAchievementsController } from "../controller/achievement"
import { listAchievementsResponseType } from "../type/achievement"

const listAchievementsQuery = {
    achievements: {
        type: listAchievementsResponseType,
        resolve: async (): Promise<ListAchievementsUseCaseResponse> => {
            return await new ListAchievementsController().listAchievements()
        }
    }
}

export {
    listAchievementsQuery
}