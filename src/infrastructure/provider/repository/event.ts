import { EventEntity } from "../../../domain/entity/event"
import { CreateEventUseCaseRepositoryInterface, ListEventsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/event"
import { createEvent, listEvents } from "../../internal/database/postgresql/event"

class CreateEventUseCaseRepository implements CreateEventUseCaseRepositoryInterface {
    async createEvent(e: EventEntity): Promise<EventEntity> {
        return await createEvent(e)
    }
}

class ListEventsUseCaseRepository implements ListEventsUseCaseRepositoryInterface {
    async listEvents(): Promise<EventEntity[]> {
        return await listEvents()
    }
}

export {
    CreateEventUseCaseRepository,
    ListEventsUseCaseRepository
}