class MemberEntity {
    public ID: number | null
    public name: string
    public pronoun: string
    public image: string
    public status: boolean
    public currentSector: string
    public role: string
    public linkedin: string
    public github: string
    public institutionalEmail: string
    public personalEmail: string
    public description: string
    public course: string
    public entrySemester: string
    public studentStatus: string
    public phoneNumber: string 

    constructor(ID: number | null, name: string, pronoun: string, image: string, status: boolean, currentSector: string, role: string, linkendin: string, github: string,
        institutionalEmail: string, personalEmail: string, description: string, course: string, entrySemester: string, studentStatus: string, phoneNumber: string) {
        this.ID = ID
        this.name = name
        this.pronoun = pronoun
        this.image = image
        this.status = status
        this.currentSector = currentSector
        this.role = role
        this.linkedin = linkendin
        this.github = github
        this.institutionalEmail = institutionalEmail
        this.personalEmail = personalEmail
        this.description = description
        this.course = course
        this.entrySemester = entrySemester
        this.studentStatus = studentStatus
        this.phoneNumber = phoneNumber
    }
}

export {
    MemberEntity
}