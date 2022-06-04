import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { EventEntity } from "../entity/event"
import { CreateEventUseCaseRepositoryInterface, ListEventsUseCaseRepositoryInterface } from "./repository/event"
import { CreateEventUseCaseRequest, CreateEventUseCaseResponse, ListEventsUseCaseResponse } from "./ucio/event"
import { CreateEventUseCaseValidateInterface } from "./validate/event"

class CreateEventUseCase {
    public validate: CreateEventUseCaseValidateInterface
    public repository: CreateEventUseCaseRepositoryInterface

    constructor(validate: CreateEventUseCaseValidateInterface, repository: CreateEventUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async createEvent(req: CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse> {
        try {
            const errorMessage = this.validate.createEvent(req)

            if (!errorMessage) {
                const entity = new EventEntity(null, req.title, req.link)
                const data = await this.repository.createEvent(entity)
                return new CreateEventUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new CreateEventUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new CreateEventUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class ListEventsUseCase {
    public repository: ListEventsUseCaseRepositoryInterface

    constructor(repository: ListEventsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listEvents(): Promise<ListEventsUseCaseResponse> {
        try {
            const data = await this.repository.listEvents()
            return new ListEventsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListEventsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    CreateEventUseCase,
    ListEventsUseCase
}