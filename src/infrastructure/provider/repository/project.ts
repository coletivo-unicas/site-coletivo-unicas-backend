import { ProjectEntity } from "../../../domain/entity/project"
import { ListProjectsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/project"
import { listProjects } from "../../internal/database/postgresql/project"

class ListProjectsUseCaseRepository implements ListProjectsUseCaseRepositoryInterface {
    async listProjects(): Promise<ProjectEntity[]> {
        return await listProjects()
    }
}

export {
    ListProjectsUseCaseRepository
}