import { AchievementImageEntity } from "../../../../domain/entity/achievement_image"
import { achievementImageModelSequelize } from "./model/achievement_image"
import { toAchievementImageEntity } from "./transformer/achievement_image"

async function listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]> {
    const response = await achievementImageModelSequelize.findAll({ where: { achievementID }, raw: true })
    return response.map(el => toAchievementImageEntity(el))
}

export {
    listAchievementImagesByAchievementID
}