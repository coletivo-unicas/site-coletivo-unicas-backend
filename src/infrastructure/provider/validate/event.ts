import { CreateEventUseCaseRequest } from "../../../domain/usecase/ucio/event"
import { CreateEventUseCaseValidateInterface } from "../../../domain/usecase/validate/event"
import { checkStringEmpty } from "./validate"

class CreateEventUseCaseValidate implements CreateEventUseCaseValidateInterface {
    createEvent(req: CreateEventUseCaseRequest): string | null {
        if (checkStringEmpty(req.title)) return 'O título não pode ficar vazio.'

        if (checkStringEmpty(req.link)) return 'O link não pode ficar vazio.'

        return null
    }
}

export {
    CreateEventUseCaseValidate
}