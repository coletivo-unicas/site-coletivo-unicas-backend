import { AchievementResponseEntity } from "./achievement"

class ProjectEntity {
    public ID: number
    public title: string
    public location: string
    public donation: string

    constructor(ID: number, title: string, location: string, donation: string) {
        this.ID = ID
        this.title = title
        this.location = location
        this.donation = donation
    }
}

class ProjectResponseEntity {
    public project: ProjectEntity
    public achievements: AchievementResponseEntity[]

    constructor(project: ProjectEntity, achievements: AchievementResponseEntity[]) {
        this.project = project
        this.achievements = achievements
    }
}

export {
    ProjectEntity,
    ProjectResponseEntity
}