import { ListMembersUseCaseResponse } from "../../../../domain/usecase/ucio/member"
import { ListMembersController } from "../controller/member"
import { listMembersResponseType } from "../type/member"

const listMembersQuery = {
    members: {
        type: listMembersResponseType,
        resolve: async (): Promise<ListMembersUseCaseResponse> => {
            return await new ListMembersController().listMembers()
        }
    }
}

export {
    listMembersQuery
}