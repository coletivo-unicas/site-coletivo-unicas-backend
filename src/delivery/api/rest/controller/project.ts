import { Request, Response } from "express"
import { ListProjectsUseCase } from "../../../../domain/usecase/project"
import { ListProjectsUseCaseRepository } from "../../../../infrastructure/provider/repository/project"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response"

class ListProjectsController {
    async listProjects(req: Request, res: Response): Promise<void> {
        const repository = new ListProjectsUseCaseRepository()
        const usecase = new ListProjectsUseCase(repository)

        const ucRes = await usecase.listProjects()

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.projects)
        }
    }
}

export {
    ListProjectsController
}