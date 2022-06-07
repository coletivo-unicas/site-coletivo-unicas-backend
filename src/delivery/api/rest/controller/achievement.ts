import { Request, Response } from "express"
import { ListAchievementsUseCase } from "../../../../domain/usecase/achievement"
import { ListAchievementsUseCaseRepository } from "../../../../infrastructure/provider/repository/achievement"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response"

class ListAchievementsController {
    async listAchievements(req: Request, res: Response): Promise<void> {
        const repository = new ListAchievementsUseCaseRepository()
        const usecase = new ListAchievementsUseCase(repository)

        const ucRes = await usecase.listAchievements()

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.achievements)
        }
    }
}

export {
    ListAchievementsController
}