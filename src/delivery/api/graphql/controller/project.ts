import { ListProjectsUseCase } from "../../../../domain/usecase/project"
import { ListProjectsUseCaseResponse } from "../../../../domain/usecase/ucio/project"
import { ListProjectsUseCaseRepository } from "../../../../infrastructure/provider/repository/project"

class ListProjectsController {
    async listProjects(): Promise<ListProjectsUseCaseResponse> {
        const repository = new ListProjectsUseCaseRepository()
        const usecase = new ListProjectsUseCase(repository)

        return await usecase.listProjects()
    }
}

export {
    ListProjectsController
}