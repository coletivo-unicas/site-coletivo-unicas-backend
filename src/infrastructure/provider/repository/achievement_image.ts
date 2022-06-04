import { AchievementImageEntity } from "../../../domain/entity/achievement_image"
import { ListAchievementImagesByAchievementIDUseCaseRepositoryInterface } from "../../../domain/usecase/repository/achievement_image"
import { listAchievementImagesByAchievementID } from "../../internal/database/postgresql/achievement_image"

class ListAchievementImagesByAchievementIDUseCaseRepository implements ListAchievementImagesByAchievementIDUseCaseRepositoryInterface {
    async listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]> {
        return await listAchievementImagesByAchievementID(achievementID)
    }

}

export {
    ListAchievementImagesByAchievementIDUseCaseRepository
}