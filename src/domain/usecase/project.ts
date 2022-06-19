import { AchievementImageEntity } from "../entity/achievement_image"
import { TAG_INTERNAL_SERVER_ERROR, InternalServerError, TAG_PRE_CONDITION_ERROR, PreconditionError } from "../entity/error"
import { ProjectEntity, ProjectWithImagesEntity } from "../entity/project"
import { GetProjectUseCaseRepositoryInterface, ListProjectsUseCaseRepositoryInterface } from "./repository/project"
import { GetProjectUseCaseRequest, GetProjectUseCaseResponse, ListProjectsUseCaseResponse } from "./ucio/project"
import { GetProjectUseCaseValidateInterface } from "./validate/project"

class ListProjectsUseCase {
    public repository: ListProjectsUseCaseRepositoryInterface

    constructor(repository: ListProjectsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listProjects(): Promise<ListProjectsUseCaseResponse> {
        try {
            const projects = await this.repository.listProjects()

            const data = []
            for (const project of projects) {
                const achievements = await this.repository.listAchievementsByProjectID(project.ID)

                const projectImages: AchievementImageEntity[] = []
                for (const achievement of achievements) {
                    const images = await this.repository.listAchievementImagesByAchievementID(achievement.ID)
                    images.forEach(el => projectImages.push(el))
                }

                data.push(new ProjectWithImagesEntity(project.ID, project.title, project.location, project.donation, projectImages))
            }

            return new ListProjectsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListProjectsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetProjectUseCase {
    public validate: GetProjectUseCaseValidateInterface
    public repository: GetProjectUseCaseRepositoryInterface

    constructor(validate: GetProjectUseCaseValidateInterface, repository: GetProjectUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getProject(req: GetProjectUseCaseRequest): Promise<GetProjectUseCaseResponse> {
        try {
            const errorMessage = await this.validate.getProject(req.ID)

            if (!errorMessage) {
                const project = await this.repository.getProject(req.ID) as ProjectEntity

                const achievements = await this.repository.listAchievementsByProjectID(project.ID)

                const projectImages: AchievementImageEntity[] = []

                for (const achievement of achievements) {
                    const images = await this.repository.listAchievementImagesByAchievementID(achievement.ID)
                    images.forEach(el => projectImages.push(el))
                }

                const data = new ProjectWithImagesEntity(project.ID, project.title, project.location, project.donation, projectImages)

                return new GetProjectUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new GetProjectUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new GetProjectUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListProjectsUseCase,
    GetProjectUseCase
}