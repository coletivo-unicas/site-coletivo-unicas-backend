import { AchievementResponseEntity } from "../entity/achievement"
import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ProjectResponseEntity } from "../entity/project"
import { ListProjectsUseCaseRepositoryInterface } from "./repository/project"
import { ListProjectsUseCaseResponse } from "./ucio/project"

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

                const achievementResponse = []
                for (const achievement of achievements) {
                    const images = await this.repository.listAchievementImagesByAchievementID(achievement.ID)
                    achievementResponse.push(new AchievementResponseEntity(achievement, images))
                }

                data.push(new ProjectResponseEntity(project, achievementResponse))
            }
            
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