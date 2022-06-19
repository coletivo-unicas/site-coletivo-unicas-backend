"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectUseCaseResponse = exports.GetProjectUseCaseRequest = exports.ListProjectsUseCaseResponse = void 0;
var ListProjectsUseCaseResponse = /** @class */ (function () {
    function ListProjectsUseCaseResponse(projects, error) {
        this.projects = projects;
        this.error = error;
    }
    return ListProjectsUseCaseResponse;
}());
exports.ListProjectsUseCaseResponse = ListProjectsUseCaseResponse;
var GetProjectUseCaseRequest = /** @class */ (function () {
    function GetProjectUseCaseRequest(ID) {
        this.ID = ID;
    }
    return GetProjectUseCaseRequest;
}());
exports.GetProjectUseCaseRequest = GetProjectUseCaseRequest;
var GetProjectUseCaseResponse = /** @class */ (function () {
    function GetProjectUseCaseResponse(project, error) {
        this.project = project;
        this.error = error;
    }
    return GetProjectUseCaseResponse;
}());
exports.GetProjectUseCaseResponse = GetProjectUseCaseResponse;
