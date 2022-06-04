import { ListAchievementImagesByAchievementIDUseCase } from "../../../../domain/usecase/achievement_image"
import {
    ListAchievementImagesByAchievementIDUseCaseRequest, ListAchievementImagesByAchievementIDUseCaseResponse
} from "../../../../domain/usecase/ucio/achievement_image"
import { ListAchievementImagesByAchievementIDUseCaseRepository } from "../../../../infrastructure/provider/repository/achievement_image"
import { ListAchievementImagesByAchievementIDUseCaseValidate } from "../../../../infrastructure/provider/validate/achievement_image"

class ListAchievementImagesByAchievementIDController {
    async listAchievementImagesByAchievementID(args: any): Promise<ListAchievementImagesByAchievementIDUseCaseResponse> {
        const { achievementID } = args
        const ucReq = new ListAchievementImagesByAchievementIDUseCaseRequest(achievementID)

        const validate = new ListAchievementImagesByAchievementIDUseCaseValidate()
        const repository = new ListAchievementImagesByAchievementIDUseCaseRepository()
        const usecase = new ListAchievementImagesByAchievementIDUseCase(validate, repository)

        return await usecase.listAchievementImagesByAchievementID(ucReq)
    }
}

export {
    ListAchievementImagesByAchievementIDController
}