import { CreateEventUseCaseRequest } from "../ucio/event"

interface CreateEventUseCaseValidateInterface {
    createEvent(req: CreateEventUseCaseRequest): string | null
}

export {
    CreateEventUseCaseValidateInterface
}