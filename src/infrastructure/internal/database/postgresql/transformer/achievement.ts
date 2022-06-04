import { AchievementEntity } from "../../../../../domain/entity/achievement"
import { AchievementModel } from "../model/achievement"

function toAchievementEntity(m: AchievementModel): AchievementEntity {
    return new AchievementEntity(
        m.ID,
        m.type,
        m.dateTimeStart,
        m.dateTimeEnd,
        m.modality,
        m.registration,
        m.learnMore,
        m.contributors,
        m.status,
        m.description,
        m.memberID,
        m.projectID,
        m.eventID
    )
}

export {
    toAchievementEntity
}