import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ListAchievementsUseCaseRepositoryInterface } from "./repository/achievement"
import { ListAchievementsUseCaseResponse } from "./ucio/achievement"

class ListAchievementsUseCase {
    public repository: ListAchievementsUseCaseRepositoryInterface

    constructor(repository: ListAchievementsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listAchievements(): Promise<ListAchievementsUseCaseResponse> {
        try {
            const data = await this.repository.listAchievements()
            return new ListAchievementsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListAchievementsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListAchievementsUseCase
}