import { MemberEntity } from "../../../../../domain/entity/member"
import { MemberModel } from "../model/member"

function toMemberEntity(m: MemberModel): MemberEntity {
    return new MemberEntity(m.ID, m.name, m.pronoun, m.image, m.status, m.currentSector, m.role, m.linkedin, m.github, m.institutionalEmail, m.personalEmail, m.description,
        m.course, m.entrySemester, m.studentStatus, m.phoneNumber)
}

export {
    toMemberEntity
}