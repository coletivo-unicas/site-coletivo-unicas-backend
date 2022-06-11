import { Router } from "express"
import { ListMembersController } from "../controller/member"

class MemberRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/members', new ListMembersController().listMembers)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    MemberRouter
}