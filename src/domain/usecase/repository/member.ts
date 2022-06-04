import { MemberEntity } from "../../entity/member";

interface ListMembersUseCaseRepositoryInterface {
    listMembers(): Promise<MemberEntity[]>
}

interface GetMemberUseCaseRepositoryInterface {
    getMember(ID: number): Promise<MemberEntity | null>
}

export {
    ListMembersUseCaseRepositoryInterface,
    GetMemberUseCaseRepositoryInterface
}