import { ErrorEntity } from "../../entity/error"
import { ProductEntity } from "../../entity/product"

class ListProductsUseCaseResponse {
    public products: ProductEntity[] | null
    public error: ErrorEntity | null

    constructor(products: ProductEntity[] | null, error: ErrorEntity | null) {
        this.products = products
        this.error = error
    }
}

export {
    ListProductsUseCaseResponse
}