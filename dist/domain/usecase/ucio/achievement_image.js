"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAchievementImagesByAchievementIDUseCaseResponse = exports.ListAchievementImagesByAchievementIDUseCaseRequest = void 0;
var ListAchievementImagesByAchievementIDUseCaseRequest = /** @class */ (function () {
    function ListAchievementImagesByAchievementIDUseCaseRequest(achievementID) {
        this.achievementID = achievementID;
    }
    return ListAchievementImagesByAchievementIDUseCaseRequest;
}());
exports.ListAchievementImagesByAchievementIDUseCaseRequest = ListAchievementImagesByAchievementIDUseCaseRequest;
var ListAchievementImagesByAchievementIDUseCaseResponse = /** @class */ (function () {
    function ListAchievementImagesByAchievementIDUseCaseResponse(achievementImages, error) {
        this.achievementImages = achievementImages;
        this.error = error;
    }
    return ListAchievementImagesByAchievementIDUseCaseResponse;
}());
exports.ListAchievementImagesByAchievementIDUseCaseResponse = ListAchievementImagesByAchievementIDUseCaseResponse;
