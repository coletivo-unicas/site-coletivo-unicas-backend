"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMemberEntity = void 0;
var member_1 = require("../../../../../domain/entity/member");
function toMemberEntity(m) {
    return new member_1.MemberEntity(m.ID, m.name, m.pronoun, m.image, m.status, m.currentSector, m.role, m.linkedin, m.github, m.institutionalEmail, m.personalEmail, m.description, m.course, m.entrySemester, m.studentStatus, m.phoneNumber);
}
exports.toMemberEntity = toMemberEntity;
