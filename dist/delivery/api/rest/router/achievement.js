"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementRouter = void 0;
var express_1 = require("express");
var achievement_1 = require("../controller/achievement");
var AchievementRouter = /** @class */ (function () {
    function AchievementRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/achievements', new achievement_1.ListAchievementsController().listAchievements);
    }
    AchievementRouter.prototype.getRouter = function () {
        return this.router;
    };
    return AchievementRouter;
}());
exports.AchievementRouter = AchievementRouter;
