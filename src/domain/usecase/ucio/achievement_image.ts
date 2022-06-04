import { ErrorEntity } from "../../entity/error"
import { AchievementImageEntity } from "../../entity/achievement_image"

class ListAchievementImagesByAchievementIDUseCaseRequest {
    public achievementID: number

    constructor(achievementID: number) {
        this.achievementID = achievementID
    }
}

class ListAchievementImagesByAchievementIDUseCaseResponse {
    public achievementImages: AchievementImageEntity[] | null
    public error: ErrorEntity | null

    constructor(achievementImages: AchievementImageEntity[] | null, error: ErrorEntity | null) {
        this.achievementImages = achievementImages
        this.error = error
    }
}

export {
    ListAchievementImagesByAchievementIDUseCaseRequest,
    ListAchievementImagesByAchievementIDUseCaseResponse
}