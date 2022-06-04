import { ErrorEntity } from "../../entity/error"
import { MemberEntity } from "../../entity/member"

class ListMembersUseCaseResponse {
    public members: MemberEntity[] | null
    public error: ErrorEntity | null

    constructor(members: MemberEntity[] | null, error: ErrorEntity | null) {
        this.members = members
        this.error = error
    }
}

class GetMemberUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetMemberUseCaseResponse {
    public member: MemberEntity | null
    public error: ErrorEntity | null

    constructor(member: MemberEntity | null, error: ErrorEntity | null) {
        this.member = member
        this.error = error
    }
}

export {
    ListMembersUseCaseResponse,
    GetMemberUseCaseRequest,
    GetMemberUseCaseResponse
}