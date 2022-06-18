import { ErrorEntity } from "../../entity/error"
import { ProjectResponseEntity } from "../../entity/project"

class ListProjectsUseCaseResponse {
    public projects: ProjectResponseEntity[] | null
    public error: ErrorEntity | null

    constructor(projects: ProjectResponseEntity[] | null, error: ErrorEntity | null) {
        this.projects = projects
        this.error = error
    }
}

export {
    ListProjectsUseCaseResponse
}