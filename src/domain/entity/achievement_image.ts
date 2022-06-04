class AchievementImageEntity {
    public ID: number
    public image: string
    public achievementID: number

    constructor(ID: number, image: string, achievementID: number) {
        this.ID = ID
        this.image = image
        this.achievementID = achievementID
    }
}

export {
    AchievementImageEntity
}