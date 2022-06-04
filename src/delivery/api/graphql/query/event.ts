import { ListEventsUseCaseResponse } from "../../../../domain/usecase/ucio/event";
import { ListEventsController } from "../controller/event";
import { listEventsResponseType } from "../type/event";

const listEventsQuery = {
    events: {
        type: listEventsResponseType,
        resolve: async (): Promise<ListEventsUseCaseResponse> => {
            return await new ListEventsController().listEvents()
        }
    }
}

export {
    listEventsQuery
}