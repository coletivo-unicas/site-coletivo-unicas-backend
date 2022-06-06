"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberModelSequelize = exports.MemberModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var MemberModel = /** @class */ (function () {
    function MemberModel(ID, name, pronoun, image, status, currentSector, role, linkendin, github, institutionalEmail, personalEmail, description, course, entrySemester, studentStatus, phoneNumber) {
        this.ID = ID;
        this.name = name;
        this.pronoun = pronoun;
        this.image = image;
        this.status = status;
        this.currentSector = currentSector;
        this.role = role;
        this.linkedin = linkendin;
        this.github = github;
        this.institutionalEmail = institutionalEmail;
        this.personalEmail = personalEmail;
        this.description = description;
        this.course = course;
        this.entrySemester = entrySemester;
        this.studentStatus = studentStatus;
        this.phoneNumber = phoneNumber;
    }
    return MemberModel;
}());
exports.MemberModel = MemberModel;
var memberModelSequelize = database_1.sequelize.define('members', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_member',
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    pronoun: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'pronoun'
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'image'
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'status'
    },
    currentSector: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'current_sector'
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'role'
    },
    linkedin: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'linkedin'
    },
    github: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'github'
    },
    institutionalEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'institutional_email'
    },
    personalEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'personal_email'
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'description'
    },
    course: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'course'
    },
    entrySemester: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'entry_semester'
    },
    studentStatus: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'student_status'
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'phone_number'
    }
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.memberModelSequelize = memberModelSequelize;
