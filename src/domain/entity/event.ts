class EventEntity {
    public ID: number | null
    public title: string
    public link: string

    constructor(ID: number | null, title: string, link: string) {
        this.ID = ID
        this.title = title
        this.link = link
    }
}

export {
    EventEntity
}