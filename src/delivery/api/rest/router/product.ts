import { Router } from "express"
import { ListProductsController } from "../controller/product"

class ProductRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.get('/products', new ListProductsController().listProducts)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    ProductRouter
}