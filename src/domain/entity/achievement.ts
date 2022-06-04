class AchievementEntity {
    public ID: number
    public type: string
    public dateTimeStart: Date
    public dateTimeEnd: Date
    public modality: string
    public registration: string
    public learnMore: string
    public contributors: string
    public status: boolean
    public description: string
    public memberID: number
    public projectID: number
    public eventID: number

    constructor(ID: number, type: string, dateTimeStart: Date, dateTimeEnd: Date, modality: string, registration: string, learnMore: string, contributors: string,
        status: boolean, description: string, memberID: number, projectID: number, eventID: number) {
        this.ID = ID
        this.type = type
        this.dateTimeStart = dateTimeStart
        this.dateTimeEnd = dateTimeEnd
        this.modality = modality
        this.registration = registration
        this.learnMore = learnMore
        this.contributors = contributors
        this.status = status
        this.description = description
        this.memberID = memberID
        this.projectID = projectID
        this.eventID = eventID
    }
}

export {
    AchievementEntity
}