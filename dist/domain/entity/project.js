"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectWithImagesEntity = exports.ProjectEntity = void 0;
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
var ProjectWithImagesEntity = /** @class */ (function () {
    function ProjectWithImagesEntity(ID, title, location, donation, images) {
        this.ID = ID;
        this.title = title;
        this.location = location;
        this.donation = donation;
        this.images = images;
    }
    return ProjectWithImagesEntity;
}());
exports.ProjectWithImagesEntity = ProjectWithImagesEntity;
