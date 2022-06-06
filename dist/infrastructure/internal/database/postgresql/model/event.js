"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventModelSequelize = exports.EventModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var EventModel = /** @class */ (function () {
    function EventModel(ID, title, link) {
        this.ID = ID;
        this.title = title;
        this.link = link;
    }
    return EventModel;
}());
exports.EventModel = EventModel;
var eventModelSequelize = database_1.sequelize.define('events', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_event',
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'title'
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'link'
    }
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.eventModelSequelize = eventModelSequelize;
