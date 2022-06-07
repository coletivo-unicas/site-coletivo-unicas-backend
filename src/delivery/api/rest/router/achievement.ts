import { Router } from "express"
import { ListAchievementsController } from "../controller/achievement"

class AchievementRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/achievements', new ListAchievementsController().listAchievements)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    AchievementRouter
}