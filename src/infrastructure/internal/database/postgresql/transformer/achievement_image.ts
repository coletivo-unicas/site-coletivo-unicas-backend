import { AchievementImageEntity } from "../../../../../domain/entity/achievement_image"
import { AchievementImageModel } from "../model/achievement_image"

function toAchievementImageEntity(m: AchievementImageModel): AchievementImageEntity {
    return new AchievementImageEntity(m.ID, m.image, m.achievementID)
}

export {
    toAchievementImageEntity
}