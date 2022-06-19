"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectUseCase = exports.ListProjectsUseCase = void 0;
var error_1 = require("../entity/error");
var project_1 = require("../entity/project");
var project_2 = require("./ucio/project");
var ListProjectsUseCase = /** @class */ (function () {
    function ListProjectsUseCase(repository) {
        this.repository = repository;
    }
    ListProjectsUseCase.prototype.listProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projects, data, _loop_1, this_1, _i, projects_1, project, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.repository.listProjects()];
                    case 1:
                        projects = _a.sent();
                        data = [];
                        _loop_1 = function (project) {
                            var achievements, projectImages, _b, achievements_1, achievement, images;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, this_1.repository.listAchievementsByProjectID(project.ID)];
                                    case 1:
                                        achievements = _c.sent();
                                        projectImages = [];
                                        _b = 0, achievements_1 = achievements;
                                        _c.label = 2;
                                    case 2:
                                        if (!(_b < achievements_1.length)) return [3 /*break*/, 5];
                                        achievement = achievements_1[_b];
                                        return [4 /*yield*/, this_1.repository.listAchievementImagesByAchievementID(achievement.ID)];
                                    case 3:
                                        images = _c.sent();
                                        images.forEach(function (el) { return projectImages.push(el); });
                                        _c.label = 4;
                                    case 4:
                                        _b++;
                                        return [3 /*break*/, 2];
                                    case 5:
                                        data.push(new project_1.ProjectWithImagesEntity(project.ID, project.title, project.location, project.donation, projectImages));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, projects_1 = projects;
                        _a.label = 2;
                    case 2:
                        if (!(_i < projects_1.length)) return [3 /*break*/, 5];
                        project = projects_1[_i];
                        return [5 /*yield**/, _loop_1(project)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, new project_2.ListProjectsUseCaseResponse(data, null)];
                    case 6:
                        error_2 = _a.sent();
                        console.log(error_1.TAG_INTERNAL_SERVER_ERROR, error_2.message);
                        return [2 /*return*/, new project_2.ListProjectsUseCaseResponse(null, new error_1.InternalServerError(error_2.message))];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return ListProjectsUseCase;
}());
exports.ListProjectsUseCase = ListProjectsUseCase;
var GetProjectUseCase = /** @class */ (function () {
    function GetProjectUseCase(validate, repository) {
        this.validate = validate;
        this.repository = repository;
    }
    GetProjectUseCase.prototype.getProject = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMessage, project, achievements, projectImages_1, _i, achievements_2, achievement, images, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, this.validate.getProject(req.ID)];
                    case 1:
                        errorMessage = _a.sent();
                        if (!!errorMessage) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.repository.getProject(req.ID)];
                    case 2:
                        project = _a.sent();
                        return [4 /*yield*/, this.repository.listAchievementsByProjectID(project.ID)];
                    case 3:
                        achievements = _a.sent();
                        projectImages_1 = [];
                        _i = 0, achievements_2 = achievements;
                        _a.label = 4;
                    case 4:
                        if (!(_i < achievements_2.length)) return [3 /*break*/, 7];
                        achievement = achievements_2[_i];
                        return [4 /*yield*/, this.repository.listAchievementImagesByAchievementID(achievement.ID)];
                    case 5:
                        images = _a.sent();
                        images.forEach(function (el) { return projectImages_1.push(el); });
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        data = new project_1.ProjectWithImagesEntity(project.ID, project.title, project.location, project.donation, projectImages_1);
                        return [2 /*return*/, new project_2.GetProjectUseCaseResponse(data, null)];
                    case 8:
                        console.log(error_1.TAG_PRE_CONDITION_ERROR, errorMessage);
                        return [2 /*return*/, new project_2.GetProjectUseCaseResponse(null, new error_1.PreconditionError(errorMessage))];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_3 = _a.sent();
                        console.log(error_1.TAG_INTERNAL_SERVER_ERROR, error_3.message);
                        return [2 /*return*/, new project_2.GetProjectUseCaseResponse(null, new error_1.InternalServerError(error_3.message))];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return GetProjectUseCase;
}());
exports.GetProjectUseCase = GetProjectUseCase;
