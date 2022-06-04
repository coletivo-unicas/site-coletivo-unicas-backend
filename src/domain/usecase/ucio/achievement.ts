import { ErrorEntity } from "../../entity/error"
import { AchievementEntity } from "../../entity/achievement"

class ListAchievementsUseCaseResponse {
    public achievements: AchievementEntity[] | null
    public error: ErrorEntity | null

    constructor(achievements: AchievementEntity[] | null, error: ErrorEntity | null) {
        this.achievements = achievements
        this.error = error
    }
}

export {
    ListAchievementsUseCaseResponse
}