"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAchievementImageEntity = void 0;
var achievement_image_1 = require("../../../../../domain/entity/achievement_image");
function toAchievementImageEntity(m) {
    return new achievement_image_1.AchievementImageEntity(m.ID, m.image, m.achievementID);
}
exports.toAchievementImageEntity = toAchievementImageEntity;
