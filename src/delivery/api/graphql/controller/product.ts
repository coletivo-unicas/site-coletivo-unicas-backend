import { ListProductsUseCase } from "../../../../domain/usecase/product"
import { ListProductsUseCaseResponse } from "../../../../domain/usecase/ucio/product"
import { ListProductsUseCaseRepository } from "../../../../infrastructure/provider/repository/product"

class ListProductsController {
    async listProducts(): Promise<ListProductsUseCaseResponse> {
        const repository = new ListProductsUseCaseRepository()
        const usecase = new ListProductsUseCase(repository)

        return await usecase.listProducts()
    }
}

export {
    ListProductsController
}