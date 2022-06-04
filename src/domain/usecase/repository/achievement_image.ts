import { AchievementImageEntity } from "../../entity/achievement_image"

interface ListAchievementImagesByAchievementIDUseCaseRepositoryInterface {
    listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]>
}

export {
    ListAchievementImagesByAchievementIDUseCaseRepositoryInterface
}