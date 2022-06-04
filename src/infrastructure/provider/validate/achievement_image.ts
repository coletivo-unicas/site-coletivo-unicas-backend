import { ListAchievementImagesByAchievementIDUseCaseValidateInterface } from "../../../domain/usecase/validate/achievement_image"
import { getAchievement } from "../../internal/database/postgresql/achievement"
import { checkNumberEmpty } from "./validate"

class ListAchievementImagesByAchievementIDUseCaseValidate implements ListAchievementImagesByAchievementIDUseCaseValidateInterface {
    async listAchievementImagesByAchievementID(achievementID: number): Promise<string | null> {
        if (checkNumberEmpty(achievementID)) return 'O ID da ação não pode ficar vazio.'

        if (!await getAchievement(achievementID)) return 'Não existe ação com o ID informado.'

        return null
    }

}

export {
    ListAchievementImagesByAchievementIDUseCaseValidate
}