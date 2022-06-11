import { Router } from "express"
import { ListProjectsController } from "../controller/project"

class ProjectRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/projects', new ListProjectsController().listProjects)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    ProjectRouter
}