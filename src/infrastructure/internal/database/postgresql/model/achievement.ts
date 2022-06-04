import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { eventModelSequelize } from "./event"
import { memberModelSequelize } from "./member"
import { projectModelSequelize } from "./project"

interface AchievementInterface extends Model {
    ID: number
    type: string
    dateTimeStart: Date
    dateTimeEnd: Date
    modality: string
    registration: string
    learnMore: string
    contributors: string
    status: boolean
    description: string
    memberID: number
    projectID: number
    eventID: number
}

class AchievementModel {
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

const achievementModelSequelize = sequelize.define<AchievementInterface>('achievements',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_achievement',
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'type_t'
        },
        dateTimeStart: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'date_time_start'
        },
        dateTimeEnd: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'date_time_end'
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'status'
        },
        modality: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'modality'
        },
        registration: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'registration'
        },
        learnMore: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'learn_more'
        },
        contributors: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'contributors'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'description'
        },
        memberID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fk_member_id_member',
            references: {
                model: memberModelSequelize,
                key: 'id_member'
            }
        },
        projectID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fk_project_id_project',
            references: {
                model: projectModelSequelize,
                key: 'id_project'
            }
        },
        eventID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fk_event_id_event',
            references: {
                model: eventModelSequelize,
                key: 'id_event'
            }
        },
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    AchievementModel,
    achievementModelSequelize
}