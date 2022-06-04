import { ProjectEntity } from "../../../../../domain/entity/project"
import { ProjectModel } from "../model/project"

function toProjectEntity(m: ProjectModel): ProjectEntity {
    return new ProjectEntity(m.ID, m.title, m.location, m.donation)
}

export {
    toProjectEntity
}