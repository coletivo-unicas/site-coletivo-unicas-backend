import { ErrorEntity } from '../../entity/error'
import { EventEntity } from '../../entity/event'

class CreateEventUseCaseRequest {
    public title: string
    public link: string

    constructor(title: string, link: string) {
        this.title = title
        this.link = link
    }
}

class CreateEventUseCaseResponse {
    public event: EventEntity | null
    public error: ErrorEntity | null

    constructor(event: EventEntity | null, error: ErrorEntity | null) {
        this.event = event
        this.error = error
    }
}

class ListEventsUseCaseResponse {
    public events: EventEntity[] | null
    public error: ErrorEntity | null

    constructor(events: EventEntity[] | null, error: ErrorEntity | null) {
        this.events = events
        this.error = error
    }
}

export {
    CreateEventUseCaseRequest,
    CreateEventUseCaseResponse,
    ListEventsUseCaseResponse
}