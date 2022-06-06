import { Router } from "express"
import { ListEventsController } from "../controller/event"

class EventRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/events', new ListEventsController().listEvents)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    EventRouter
}