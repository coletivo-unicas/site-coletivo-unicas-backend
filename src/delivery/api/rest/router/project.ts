import { Router } from "express"
import { GetProjectController, ListProjectsController } from "../controller/project"

class ProjectRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/projects', new ListProjectsController().listProjects)
        this.router.get('/project/:ID', new GetProjectController().getProject)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    ProjectRouter
}