"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievementModelSequelize = exports.AchievementModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var event_1 = require("./event");
var member_1 = require("./member");
var project_1 = require("./project");
var AchievementModel = /** @class */ (function () {
    function AchievementModel(ID, type, dateTimeStart, dateTimeEnd, modality, registration, learnMore, contributors, status, description, memberID, projectID, eventID) {
        this.ID = ID;
        this.type = type;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeEnd = dateTimeEnd;
        this.modality = modality;
        this.registration = registration;
        this.learnMore = learnMore;
        this.contributors = contributors;
        this.status = status;
        this.description = description;
        this.memberID = memberID;
        this.projectID = projectID;
        this.eventID = eventID;
    }
    return AchievementModel;
}());
exports.AchievementModel = AchievementModel;
var achievementModelSequelize = database_1.sequelize.define('achievements', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_achievement',
        primaryKey: true
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'type_t'
    },
    dateTimeStart: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: 'date_time_start'
    },
    dateTimeEnd: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: 'date_time_end'
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'status'
    },
    modality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'modality'
    },
    registration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'registration'
    },
    learnMore: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'learn_more'
    },
    contributors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'contributors'
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'description'
    },
    memberID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'fk_member_id_member',
        references: {
            model: member_1.memberModelSequelize,
            key: 'id_member'
        }
    },
    projectID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'fk_project_id_project',
        references: {
            model: project_1.projectModelSequelize,
            key: 'id_project'
        }
    },
    eventID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'fk_event_id_event',
        references: {
            model: event_1.eventModelSequelize,
            key: 'id_event'
        }
    },
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.achievementModelSequelize = achievementModelSequelize;
