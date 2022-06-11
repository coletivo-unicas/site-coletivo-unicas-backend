import { AchievementResponseEntity } from "../entity/achievement"
import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ListAchievementsUseCaseRepositoryInterface } from "./repository/achievement"
import { ListAchievementsUseCaseResponse } from "./ucio/achievement"

class ListAchievementsUseCase {
    public repository: ListAchievementsUseCaseRepositoryInterface

    constructor(repository: ListAchievementsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listAchievements(): Promise<ListAchievementsUseCaseResponse> {
        try {
            const achievements = await this.repository.listAchievements()
            
            const data = []
            for (const achievement of achievements) {
                const images = await this.repository.listAchievementImagesByAchievementID(achievement.ID)
                const entity = new AchievementResponseEntity(achievement, images)
                data.push(entity)
            }

            return new ListAchievementsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListAchievementsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListAchievementsUseCase
}