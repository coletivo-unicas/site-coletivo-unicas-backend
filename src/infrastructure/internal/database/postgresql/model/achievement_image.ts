import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { achievementModelSequelize } from "./achievement"

interface AchievementImageInterface extends Model {
    ID: number
    image: string
    achievementID: number
}

class AchievementImageModel {
    public ID: number
    public image: string
    public achievementID: number

    constructor(ID: number, image: string, achievementID: number) {
        this.ID = ID
        this.image = image
        this.achievementID = achievementID
    }
}

const achievementImageModelSequelize = sequelize.define<AchievementImageInterface>('achievement_images',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_achievement_image',
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image'
        },
        achievementID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fk_achievement_id_achievement',
            references: {
                model: achievementModelSequelize,
                key: 'id_achievement'
            }
        }
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    AchievementImageModel,
    achievementImageModelSequelize
}