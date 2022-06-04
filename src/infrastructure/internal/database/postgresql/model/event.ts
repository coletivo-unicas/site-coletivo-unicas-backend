import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

interface EventInterface extends Model {
    ID: number
    title: string
    link: string
}

class EventModel {
    public ID: number | null
    public title: string
    public link: string

    constructor(ID: number | null, title: string, link: string) {
        this.ID = ID
        this.title = title
        this.link = link
    }
}

const eventModelSequelize = sequelize.define<EventInterface>('events',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_event',
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'link'
        }
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    EventModel,
    eventModelSequelize
}