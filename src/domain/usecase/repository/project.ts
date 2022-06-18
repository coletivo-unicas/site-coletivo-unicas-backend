import { AchievementEntity } from "../../entity/achievement"
import { AchievementImageEntity } from "../../entity/achievement_image"
import { ProjectEntity } from "../../entity/project"

interface ListProjectsUseCaseRepositoryInterface {
    listProjects(): Promise<ProjectEntity[]>

    listAchievementsByProjectID(projectID: number): Promise<AchievementEntity[]>

    listAchievementImagesByAchievementID(achievementID: number): Promise<AchievementImageEntity[]>
}

export {
    ListProjectsUseCaseRepositoryInterface
}