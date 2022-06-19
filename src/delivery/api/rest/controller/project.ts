import { Request, Response } from "express"
import { GetProjectUseCase, ListProjectsUseCase } from "../../../../domain/usecase/project"
import { GetProjectUseCaseRequest } from "../../../../domain/usecase/ucio/project"
import { GetProjectUseCaseRepository, ListProjectsUseCaseRepository } from "../../../../infrastructure/provider/repository/project"
import { GetProjectUseCaseValidate } from "../../../../infrastructure/provider/validate/project"
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

class GetProjectController {
    async getProject(req: Request, res: Response): Promise<void> {
        const ID = parseInt(req.params.ID, 10)

        const ucReq = new GetProjectUseCaseRequest(ID)
        const validate = new GetProjectUseCaseValidate()
        const repository = new GetProjectUseCaseRepository()
        const usecase = new GetProjectUseCase(validate, repository)

        const ucRes = await usecase.getProject(ucReq)

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.project)
        }
    }
}

export {
    ListProjectsController,
    GetProjectController
}