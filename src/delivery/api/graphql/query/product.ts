import { ListProductsUseCaseResponse } from "../../../../domain/usecase/ucio/product"
import { ListProductsController } from "../controller/product"
import { listProductsResponseType } from "../type/product"

const listProductsQuery = {
    products: {
        type: listProductsResponseType,
        resolve: async (): Promise<ListProductsUseCaseResponse> => {
            return await new ListProductsController().listProducts()
        }
    }
}

export {
    listProductsQuery
}