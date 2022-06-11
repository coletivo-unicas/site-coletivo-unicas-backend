import { AchievementEntity } from "../../../domain/entity/achievement"
import { AchievementImageEntity } from "../../../domain/entity/achievement_image"
import { ListAchievementsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/achievement"
import { listAchievements } from "../../internal/database/postgresql/achievement"
import { listAchievementImagesByAchievementID } from "../../internal/database/postgresql/achievement_image"

class ListAchievementsUseCaseRepository implements ListAchievementsUseCaseRepositoryInterface {
    async listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]> {
        return await listAchievementImagesByAchievementID(achievementID)
    }
    async listAchievements(): Promise<AchievementEntity[]> {
        return await listAchievements()
    }
}

export {
    ListAchievementsUseCaseRepository
}