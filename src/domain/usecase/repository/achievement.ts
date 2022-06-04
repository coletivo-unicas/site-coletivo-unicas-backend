import { AchievementEntity } from "../../entity/achievement"

interface ListAchievementsUseCaseRepositoryInterface {
    listAchievements(): Promise<AchievementEntity[]>
}

export {
    ListAchievementsUseCaseRepositoryInterface
}