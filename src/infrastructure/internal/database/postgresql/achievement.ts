import { AchievementEntity } from "../../../../domain/entity/achievement"
import { achievementModelSequelize } from "./model/achievement"
import { toAchievementEntity } from "./transformer/achievement"

async function getAchievement(ID: number): Promise<AchievementEntity | null> {
    const response = await achievementModelSequelize.findByPk(ID, { raw: true })
    return response ? toAchievementEntity(response) : null
}

async function listAchievements(): Promise<AchievementEntity[]> {
    const response = await achievementModelSequelize.findAll({ raw: true })
    return response.map(el => toAchievementEntity(el))
}

export {
    getAchievement,
    listAchievements
}