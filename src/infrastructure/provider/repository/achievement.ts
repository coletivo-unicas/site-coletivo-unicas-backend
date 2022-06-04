import { AchievementEntity } from "../../../domain/entity/achievement"
import { ListAchievementsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/achievement"
import { listAchievements } from "../../internal/database/postgresql/achievement"

class ListAchievementsUseCaseRepository implements ListAchievementsUseCaseRepositoryInterface {
    async listAchievements(): Promise<AchievementEntity[]> {
        return await listAchievements()
    }
}

export {
    ListAchievementsUseCaseRepository
}