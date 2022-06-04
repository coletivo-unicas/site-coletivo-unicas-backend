import { GetMemberUseCaseValidateInterface } from "../../../domain/usecase/validate/member"
import { getMember } from "../../internal/database/postgresql/member"
import { checkNumberEmpty } from "./validate"

class GetMemberUseCaseValidate implements GetMemberUseCaseValidateInterface {
    async getMember(ID: number): Promise<string | null> {
        if (checkNumberEmpty(ID)) return 'O ID não pode ficar vazio.'

        if (!await getMember(ID)) return 'Não existe membro com o ID informado.'

        return null
    }
}

export {
    GetMemberUseCaseValidate
}