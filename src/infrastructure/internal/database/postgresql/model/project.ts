import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

interface ProjectInterface extends Model {
    ID: number
    title: string
    location: string
    donation: string
}

class ProjectModel {
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

const projectModelSequelize = sequelize.define<ProjectInterface>('projects',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_project',
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'location'
        },
        donation: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'donation'
        }
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    ProjectModel,
    projectModelSequelize
}