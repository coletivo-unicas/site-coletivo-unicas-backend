import { Request, Response } from "express"
import { ListMembersUseCase } from "../../../../domain/usecase/member"
import { ListMembersUseCaseRepository } from "../../../../infrastructure/provider/repository/member"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response"

class ListMembersController {
    async listMembers(req: Request, res: Response): Promise<void> {
        const repository = new ListMembersUseCaseRepository()
        const usecase = new ListMembersUseCase(repository)

        const ucRes = await usecase.listMembers()

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.members)
        }
    }
}

export {
    ListMembersController
}