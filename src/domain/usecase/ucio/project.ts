import { ErrorEntity } from "../../entity/error"
import { ProjectWithImagesEntity } from "../../entity/project"

class ListProjectsUseCaseResponse {
    public projects: ProjectWithImagesEntity[] | null
    public error: ErrorEntity | null

    constructor(projects: ProjectWithImagesEntity[] | null, error: ErrorEntity | null) {
        this.projects = projects
        this.error = error
    }
}

class GetProjectUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetProjectUseCaseResponse {
    public project: ProjectWithImagesEntity | null
    public error: ErrorEntity | null

    constructor(project: ProjectWithImagesEntity | null, error: ErrorEntity | null) {
        this.project = project
        this.error = error
    }
}

export {
    ListProjectsUseCaseResponse,
    GetProjectUseCaseRequest,
    GetProjectUseCaseResponse
}