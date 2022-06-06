"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModelSequelize = exports.ProjectModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var ProjectModel = /** @class */ (function () {
    function ProjectModel(ID, title, location, donation) {
        this.ID = ID;
        this.title = title;
        this.location = location;
        this.donation = donation;
    }
    return ProjectModel;
}());
exports.ProjectModel = ProjectModel;
var projectModelSequelize = database_1.sequelize.define('projects', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_project',
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'title'
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'location'
    },
    donation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'donation'
    }
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.projectModelSequelize = projectModelSequelize;
