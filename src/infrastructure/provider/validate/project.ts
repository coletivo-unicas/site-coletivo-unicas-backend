import { GetProjectUseCaseValidateInterface } from "../../../domain/usecase/validate/project"
import { getProject } from "../../internal/database/postgresql/project"
import { checkNumberEmpty } from "./validate"

class GetProjectUseCaseValidate implements GetProjectUseCaseValidateInterface {
    async getProject(ID: number): Promise<string | null> {
        if (checkNumberEmpty(ID)) return 'O ID não pode ficar vazio.'

        if (!await getProject(ID)) return 'Não existe projeto com o ID informado.'

        return null
    }
}

export {
    GetProjectUseCaseValidate
}