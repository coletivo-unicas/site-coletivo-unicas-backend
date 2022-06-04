import { TAG_INTERNAL_SERVER_ERROR, InternalServerError, TAG_PRE_CONDITION_ERROR, PreconditionError } from "../entity/error"
import { ListAchievementImagesByAchievementIDUseCaseRepositoryInterface } from "./repository/achievement_image"
import { ListAchievementImagesByAchievementIDUseCaseResponse, ListAchievementImagesByAchievementIDUseCaseRequest } from "./ucio/achievement_image"
import { ListAchievementImagesByAchievementIDUseCaseValidateInterface } from "./validate/achievement_image"

class ListAchievementImagesByAchievementIDUseCase {
    public validate: ListAchievementImagesByAchievementIDUseCaseValidateInterface
    public repository: ListAchievementImagesByAchievementIDUseCaseRepositoryInterface

    constructor(validate: ListAchievementImagesByAchievementIDUseCaseValidateInterface, repository: ListAchievementImagesByAchievementIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async listAchievementImagesByAchievementID(req: ListAchievementImagesByAchievementIDUseCaseRequest): Promise<ListAchievementImagesByAchievementIDUseCaseResponse> {
        try {
            const errorMessage = await this.validate.listAchievementImagesByAchievementID(req.achievementID)

            if (!errorMessage) {
                const data = await this.repository.listAchievementImagesByAchievementID(req.achievementID)
                return new ListAchievementImagesByAchievementIDUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new ListAchievementImagesByAchievementIDUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListAchievementImagesByAchievementIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListAchievementImagesByAchievementIDUseCase
}