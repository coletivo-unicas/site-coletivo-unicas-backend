import { TAG_INTERNAL_SERVER_ERROR, InternalServerError, TAG_PRE_CONDITION_ERROR, PreconditionError } from "../entity/error"
import { GetMemberUseCaseRepositoryInterface, ListMembersUseCaseRepositoryInterface } from "./repository/member"
import { GetMemberUseCaseRequest, GetMemberUseCaseResponse, ListMembersUseCaseResponse } from "./ucio/member"
import { GetMemberUseCaseValidateInterface } from "./validate/member"

class ListMembersUseCase {
    public repository: ListMembersUseCaseRepositoryInterface

    constructor(repository: ListMembersUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listMembers(): Promise<ListMembersUseCaseResponse> {
        try {
            const data = await this.repository.listMembers()
            return new ListMembersUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListMembersUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetMemberUseCase {
    public validate: GetMemberUseCaseValidateInterface
    public repository: GetMemberUseCaseRepositoryInterface

    constructor(validate: GetMemberUseCaseValidateInterface, repository: GetMemberUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getMember(req: GetMemberUseCaseRequest): Promise<GetMemberUseCaseResponse> {
        try {
            const errorMessage = await this.validate.getMember(req.ID)

            if (!errorMessage) {
                const data = await this.repository.getMember(req.ID)
                return new GetMemberUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new GetMemberUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new GetMemberUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListMembersUseCase,
    GetMemberUseCase
}