import { ErrorEntity } from "../../entity/error"
import { ProductResponseEntity } from "../../entity/product"

class ListProductsUseCaseResponse {
    public products: ProductResponseEntity[] | null
    public error: ErrorEntity | null

    constructor(products: ProductResponseEntity[] | null, error: ErrorEntity | null) {
        this.products = products
        this.error = error
    }
}

export {
    ListProductsUseCaseResponse
}