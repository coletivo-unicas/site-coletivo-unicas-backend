import { Request, Response } from "express"
import { ListEventsUseCase } from "../../../../domain/usecase/event"
import { ListEventsUseCaseRepository } from "../../../../infrastructure/provider/repository/event"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response"

class ListEventsController {
    async listEvents(req: Request, res: Response): Promise<void> {
        const repository = new ListEventsUseCaseRepository()
        const usecase = new ListEventsUseCase(repository)

        const ucRes = await usecase.listEvents()

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.events)
        }
    }
}

export {
    ListEventsController
}