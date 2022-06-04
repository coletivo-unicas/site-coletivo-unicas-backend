import { EventEntity } from "../../../../../domain/entity/event"
import { EventModel } from "../model/event"

function toEventEntity(m: EventModel): EventEntity {
    return new EventEntity(m.ID, m.title, m.link)
}

function toEventModel(e: EventEntity): EventModel {
    return new EventModel(e.ID, e.title, e.link)
}

export {
    toEventEntity,
    toEventModel
}