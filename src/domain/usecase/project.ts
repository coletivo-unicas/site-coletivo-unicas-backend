import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ListProjectsUseCaseRepositoryInterface } from "./repository/project"
import { ListProjectsUseCaseResponse } from "./ucio/project"

class ListProjectsUseCase {
    public repository: ListProjectsUseCaseRepositoryInterface

    constructor(repository: ListProjectsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listProjects(): Promise<ListProjectsUseCaseResponse> {
        try {
            const data = await this.repository.listProjects()
            return new ListProjectsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListProjectsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListProjectsUseCase
}