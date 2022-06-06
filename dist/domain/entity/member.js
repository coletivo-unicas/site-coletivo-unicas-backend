"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberEntity = void 0;
var MemberEntity = /** @class */ (function () {
    function MemberEntity(ID, name, pronoun, image, status, currentSector, role, linkendin, github, institutionalEmail, personalEmail, description, course, entrySemester, studentStatus, phoneNumber) {
        this.ID = ID;
        this.name = name;
        this.pronoun = pronoun;
        this.image = image;
        this.status = status;
        this.currentSector = currentSector;
        this.role = role;
        this.linkedin = linkendin;
        this.github = github;
        this.institutionalEmail = institutionalEmail;
        this.personalEmail = personalEmail;
        this.description = description;
        this.course = course;
        this.entrySemester = entrySemester;
        this.studentStatus = studentStatus;
        this.phoneNumber = phoneNumber;
    }
    return MemberEntity;
}());
exports.MemberEntity = MemberEntity;
