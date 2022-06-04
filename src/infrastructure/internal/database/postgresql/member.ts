import { MemberEntity } from "../../../../domain/entity/member"
import { memberModelSequelize } from "./model/member"
import { toMemberEntity } from "./transformer/member"

async function listMembers(): Promise<MemberEntity[]> {
    const response = await memberModelSequelize.findAll({ raw: true })
    return response.map(el => toMemberEntity(el))
}

async function getMember(ID: number): Promise<MemberEntity | null> {
    const response = await memberModelSequelize.findByPk(ID, { raw: true })
    return response ? toMemberEntity(response) : null
}

export {
    listMembers,
    getMember
}