import { EventEntity } from '../../entity/event'

interface CreateEventUseCaseRepositoryInterface {
    createEvent(e: EventEntity): Promise<EventEntity>
}

interface ListEventsUseCaseRepositoryInterface {
    listEvents(): Promise<EventEntity[]>
}

export {
    CreateEventUseCaseRepositoryInterface,
    ListEventsUseCaseRepositoryInterface
}