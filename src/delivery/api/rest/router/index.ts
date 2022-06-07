import express from 'express'
import { AchievementRouter } from './achievement'
import { CorsRouter } from './cors'
import { EventRouter } from './event'

class Router {
	constructor(app: express.Router) {
		app.get('/favicon.ico', (req, res) => res.status(204))
		app.get('/', (req, res) => res.status(204))
		app.use(new CorsRouter().getRouter())
		app.use(new EventRouter().getRouter())
		app.use(new AchievementRouter().getRouter())
	}
}

export { Router }
