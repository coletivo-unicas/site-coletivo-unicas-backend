import { AchievementImageEntity } from "./achievement_image"

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

class ProjectWithImagesEntity {
    public ID: number
    public title: string
    public location: string
    public donation: string
    public description: string
    public images: AchievementImageEntity[]

    constructor(ID: number, title: string, location: string, donation: string, description: string, images: AchievementImageEntity[]) {
        this.ID = ID
        this.title = title
        this.location = location
        this.donation = donation
        this.description = description
        this.images = images
    }
}

export {
    ProjectEntity,
    ProjectWithImagesEntity
}