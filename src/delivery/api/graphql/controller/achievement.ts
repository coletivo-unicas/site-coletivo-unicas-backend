import { ListAchievementsUseCase } from "../../../../domain/usecase/achievement"
import { ListAchievementsUseCaseResponse } from "../../../../domain/usecase/ucio/achievement"
import { ListAchievementsUseCaseRepository } from "../../../../infrastructure/provider/repository/achievement"

class ListAchievementsController {
    async listAchievements(): Promise<ListAchievementsUseCaseResponse> {
        const repository = new ListAchievementsUseCaseRepository()
        const usecase = new ListAchievementsUseCase(repository)

        return await usecase.listAchievements()
    }
}

export {
    ListAchievementsController
}