import { ListProjectsUseCaseResponse } from "../../../../domain/usecase/ucio/project";
import { ListProjectsController } from "../controller/project";
import { listProjectsResponseType } from "../type/project";

const listProjectsQuery = {
    projects: {
        type: listProjectsResponseType,
        resolve: async (): Promise<ListProjectsUseCaseResponse> => {
            return await new ListProjectsController().listProjects()
        }
    }
}

export {
    listProjectsQuery
}