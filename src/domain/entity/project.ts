class ProjectEntity {
    public ID: number | null
    public title: string
    public location: string
    public donation: string

    constructor(ID: number | null, title: string, location: string, donation: string) {
        this.ID = ID
        this.title = title
        this.location = location
        this.donation = donation
    }
}

export {
    ProjectEntity
}