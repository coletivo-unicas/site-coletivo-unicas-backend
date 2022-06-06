"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievementImageModelSequelize = exports.AchievementImageModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var achievement_1 = require("./achievement");
var AchievementImageModel = /** @class */ (function () {
    function AchievementImageModel(ID, image, achievementID) {
        this.ID = ID;
        this.image = image;
        this.achievementID = achievementID;
    }
    return AchievementImageModel;
}());
exports.AchievementImageModel = AchievementImageModel;
var achievementImageModelSequelize = database_1.sequelize.define('achievement_images', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_achievement_image',
        primaryKey: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'image'
    },
    achievementID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'fk_achievement_id_achievement',
        references: {
            model: achievement_1.achievementModelSequelize,
            key: 'id_achievement'
        }
    }
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.achievementImageModelSequelize = achievementImageModelSequelize;
