import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

interface MemberInterface extends Model {
    ID: number
    name: string
    pronoun: string
    image: string
    status: boolean
    currentSector: string
    role: string
    linkedin: string
    github: string
    institutionalEmail: string
    personalEmail: string
    description: string
    course: string
    entrySemester: string
    studentStatus: string
    phoneNumber: string 
}

class MemberModel {
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

const memberModelSequelize = sequelize.define<MemberInterface>('members',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_member',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        pronoun: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'pronoun'
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image'
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'status'
        },
        currentSector: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'current_sector'
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'role'
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'linkedin'
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'github'
        },
        institutionalEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'institutional_email'
        },
        personalEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'personal_email'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'description'
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'course'
        },
        entrySemester: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'entry_semester'
        },
        studentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'student_status'
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'phone_number'
        }
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    MemberModel,
    memberModelSequelize
}