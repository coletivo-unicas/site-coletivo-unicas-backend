import { GetMemberUseCase, ListMembersUseCase } from "../../../../domain/usecase/member"
import { GetMemberUseCaseRequest, GetMemberUseCaseResponse, ListMembersUseCaseResponse } from "../../../../domain/usecase/ucio/member"
import { GetMemberUseCaseRepository, ListMembersUseCaseRepository } from "../../../../infrastructure/provider/repository/member"
import { GetMemberUseCaseValidate } from "../../../../infrastructure/provider/validate/member"

class ListMembersController {
    async listMembers(): Promise<ListMembersUseCaseResponse> {
        const repository = new ListMembersUseCaseRepository()
        const usecase = new ListMembersUseCase(repository)

        return await usecase.listMembers()
    }
}

class GetMemberController {
    async getMember(args: any): Promise<GetMemberUseCaseResponse> {
        const { ID } = args
        const ucReq = new GetMemberUseCaseRequest(ID)

        const validate = new GetMemberUseCaseValidate()
        const repository = new GetMemberUseCaseRepository()
        const usecase = new GetMemberUseCase(validate, repository)

        return await usecase.getMember(ucReq)
    }
}

export {
    ListMembersController,
    GetMemberController
}