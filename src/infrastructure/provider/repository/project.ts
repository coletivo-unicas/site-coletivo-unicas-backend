import { AchievementEntity } from "../../../domain/entity/achievement"
import { AchievementImageEntity } from "../../../domain/entity/achievement_image"
import { ProjectEntity } from "../../../domain/entity/project"
import { ListProjectsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/project"
import { listAchievementsByProjectID } from "../../internal/database/postgresql/achievement"
import { listAchievementImagesByAchievementID } from "../../internal/database/postgresql/achievement_image"
import { listProjects } from "../../internal/database/postgresql/project"

class ListProjectsUseCaseRepository implements ListProjectsUseCaseRepositoryInterface {
    async listAchievementsByProjectID(projectID: number): Promise<AchievementEntity[]> {
        return await listAchievementsByProjectID(projectID)
    }

    async listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]> {
        return await listAchievementImagesByAchievementID(achievementID)
    }

    async listProjects(): Promise<ProjectEntity[]> {
        return await listProjects()
    }
}

export {
    ListProjectsUseCaseRepository
}