import { AchievementEntity } from "../../entity/achievement"
import { AchievementImageEntity } from "../../entity/achievement_image"

interface ListAchievementsUseCaseRepositoryInterface {
    listAchievements(): Promise<AchievementEntity[]>

    listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]>
}

export {
    ListAchievementsUseCaseRepositoryInterface
}