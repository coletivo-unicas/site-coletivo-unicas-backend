import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ListProductsUseCaseRepositoryInterface } from "./repository/product"
import { ListProductsUseCaseResponse } from "./ucio/product"

class ListProductsUseCase {
    public repository: ListProductsUseCaseRepositoryInterface

    constructor(repository: ListProductsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listProducts(): Promise<ListProductsUseCaseResponse> {
        try {
            const data = await this.repository.listProducts()
            return new ListProductsUseCaseResponse(data, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new ListProductsUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    ListProductsUseCase
}