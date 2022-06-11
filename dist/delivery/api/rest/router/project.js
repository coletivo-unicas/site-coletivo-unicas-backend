"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRouter = void 0;
var express_1 = require("express");
var project_1 = require("../controller/project");
var ProjectRouter = /** @class */ (function () {
    function ProjectRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/projects', new project_1.ListProjectsController().listProjects);
    }
    ProjectRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ProjectRouter;
}());
exports.ProjectRouter = ProjectRouter;
