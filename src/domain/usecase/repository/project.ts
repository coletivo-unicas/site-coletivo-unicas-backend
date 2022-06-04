import { ProjectEntity } from "../../entity/project"

interface ListProjectsUseCaseRepositoryInterface {
    listProjects(): Promise<ProjectEntity[]>
}

export {
    ListProjectsUseCaseRepositoryInterface
}