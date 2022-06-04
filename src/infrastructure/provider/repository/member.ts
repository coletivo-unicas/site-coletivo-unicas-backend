import { MemberEntity } from "../../../domain/entity/member"
import { GetMemberUseCaseRepositoryInterface, ListMembersUseCaseRepositoryInterface } from "../../../domain/usecase/repository/member"
import { getMember, listMembers } from "../../internal/database/postgresql/member"

class ListMembersUseCaseRepository implements ListMembersUseCaseRepositoryInterface {
    async listMembers(): Promise<MemberEntity[]> {
        return await listMembers()
    }
}

class GetMemberUseCaseRepository implements GetMemberUseCaseRepositoryInterface {
    async getMember(ID: number): Promise<MemberEntity | null> {
        return await getMember(ID)
    }
}

export {
    ListMembersUseCaseRepository,
    GetMemberUseCaseRepository
}