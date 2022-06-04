import { GraphQLString } from "graphql";
import { CreateEventUseCaseResponse } from "../../../../domain/usecase/ucio/event";
import { CreateEventController } from "../controller/event";
import { createEventResponseType } from "../type/event";

const createEventMutation = {
    createEvent: {
        type: createEventResponseType,
        args: {
            title: { type: GraphQLString },
            link: { type: GraphQLString }
        },
        resolve: async (_: any, args: any): Promise<CreateEventUseCaseResponse> => {
            return await new CreateEventController().createEvent(args)
        }
    }
}

export {
    createEventMutation
}