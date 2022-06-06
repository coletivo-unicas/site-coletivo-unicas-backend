"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAchievementEntity = void 0;
var achievement_1 = require("../../../../../domain/entity/achievement");
function toAchievementEntity(m) {
    return new achievement_1.AchievementEntity(m.ID, m.type, m.dateTimeStart, m.dateTimeEnd, m.modality, m.registration, m.learnMore, m.contributors, m.status, m.description, m.memberID, m.projectID, m.eventID);
}
exports.toAchievementEntity = toAchievementEntity;
