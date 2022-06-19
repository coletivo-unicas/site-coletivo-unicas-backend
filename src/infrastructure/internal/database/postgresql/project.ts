import { ProjectEntity } from "../../../../domain/entity/project"
import { projectModelSequelize } from "./model/project"
import { toProjectEntity } from "./transformer/project"

async function getProject(ID: number): Promise<ProjectEntity | null> {
    const response = await projectModelSequelize.findByPk(ID, { raw: true })
    return response ? toProjectEntity(response) : null
}

async function listProjects(): Promise<ProjectEntity[]> {
    const response = await projectModelSequelize.findAll({ raw: true })
    return response.map(el => toProjectEntity(el))
}

export {
    listProjects,
    getProject
}