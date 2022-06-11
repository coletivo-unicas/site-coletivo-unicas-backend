import { ErrorEntity } from "../../entity/error"
import { AchievementResponseEntity } from "../../entity/achievement"

class ListAchievementsUseCaseResponse {
    public achievements: AchievementResponseEntity[] | null
    public error: ErrorEntity | null

    constructor(achievements: AchievementResponseEntity[] | null, error: ErrorEntity | null) {
        this.achievements = achievements
        this.error = error
    }
}

export {
    ListAchievementsUseCaseResponse
}