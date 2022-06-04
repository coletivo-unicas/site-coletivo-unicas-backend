import { ErrorEntity } from "../../entity/error"
import { ProjectEntity } from "../../entity/project"

class ListProjectsUseCaseResponse {
    public projects: ProjectEntity[] | null
    public error: ErrorEntity | null

    constructor(projects: ProjectEntity[] | null, error: ErrorEntity | null) {
        this.projects = projects
        this.error = error
    }
}

export {
    ListProjectsUseCaseResponse
}