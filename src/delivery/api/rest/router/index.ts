import express from 'express'
import { AchievementRouter } from './achievement'
import { CorsRouter } from './cors'
import { EventRouter } from './event'
import { MemberRouter } from './member'
import { ProductRouter } from './product'
import { ProjectRouter } from './project'

class Router {
	constructor(app: express.Router) {
		app.get('/favicon.ico', (req, res) => res.status(204))
		app.get('/', (req, res) => res.send("Hello World!"))
		app.use(new CorsRouter().getRouter())
		app.use(new EventRouter().getRouter())
		app.use(new AchievementRouter().getRouter())
		app.use(new ProjectRouter().getRouter())
		app.use(new MemberRouter().getRouter())
		app.use(new ProductRouter().getRouter())
	}
}

export { Router }
