"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementEntity = void 0;
var AchievementEntity = /** @class */ (function () {
    function AchievementEntity(ID, type, dateTimeStart, dateTimeEnd, modality, registration, learnMore, contributors, status, description, memberID, projectID, eventID) {
        this.ID = ID;
        this.type = type;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeEnd = dateTimeEnd;
        this.modality = modality;
        this.registration = registration;
        this.learnMore = learnMore;
        this.contributors = contributors;
        this.status = status;
        this.description = description;
        this.memberID = memberID;
        this.projectID = projectID;
        this.eventID = eventID;
    }
    return AchievementEntity;
}());
exports.AchievementEntity = AchievementEntity;
