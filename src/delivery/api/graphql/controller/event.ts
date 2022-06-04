import { CreateEventUseCase, ListEventsUseCase } from "../../../../domain/usecase/event"
import { CreateEventUseCaseRequest, CreateEventUseCaseResponse, ListEventsUseCaseResponse } from "../../../../domain/usecase/ucio/event"
import { CreateEventUseCaseRepository, ListEventsUseCaseRepository } from "../../../../infrastructure/provider/repository/event"
import { CreateEventUseCaseValidate } from "../../../../infrastructure/provider/validate/event"

class CreateEventController {
    async createEvent(args: any): Promise<CreateEventUseCaseResponse> {
        const { title, link } = args
        const ucReq = new CreateEventUseCaseRequest(title, link)

        const validate = new CreateEventUseCaseValidate()
        const repository = new CreateEventUseCaseRepository()
        const usecase = new CreateEventUseCase(validate, repository)

        return await usecase.createEvent(ucReq)
    }
}

class ListEventsController {
    async listEvents(): Promise<ListEventsUseCaseResponse> {
        const repository = new ListEventsUseCaseRepository()
        const usecase = new ListEventsUseCase(repository)

        return await usecase.listEvents()
    }
}

export {
    CreateEventController,
    ListEventsController
}