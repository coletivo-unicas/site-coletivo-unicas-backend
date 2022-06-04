import { EventEntity } from "../../../../domain/entity/event"
import { eventModelSequelize } from "./model/event"
import { toEventEntity, toEventModel } from "./transformer/event"

async function createEvent(e: EventEntity): Promise<EventEntity> {
    const model = toEventModel(e)

    const response = await eventModelSequelize.create(model, { raw: true })

    return toEventEntity(response)
}

async function listEvents(): Promise<EventEntity[]> {
    const response = await eventModelSequelize.findAll({ raw: true })
    return response.map(el => toEventEntity(el))
}

export {
    createEvent,
    listEvents
}