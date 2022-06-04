import { ProjectEntity } from "../../../../domain/entity/project"
import { projectModelSequelize } from "./model/project"
import { toProjectEntity } from "./transformer/project"

async function listProjects(): Promise<ProjectEntity[]> {
    const response = await projectModelSequelize.findAll({ raw: true })
    return response.map(el => toProjectEntity(el))
}

export {
    listProjects
}