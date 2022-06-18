"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResponseEntity = exports.ProjectEntity = void 0;
var ProjectEntity = /** @class */ (function () {
    function ProjectEntity(ID, title, location, donation) {
        this.ID = ID;
        this.title = title;
        this.location = location;
        this.donation = donation;
    }
    return ProjectEntity;
}());
exports.ProjectEntity = ProjectEntity;
var ProjectResponseEntity = /** @class */ (function () {
    function ProjectResponseEntity(project, achievements) {
        this.project = project;
        this.achievements = achievements;
    }
    return ProjectResponseEntity;
}());
exports.ProjectResponseEntity = ProjectResponseEntity;
