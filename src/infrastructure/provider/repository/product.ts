import { ProductEntity } from "../../../domain/entity/product"
import { ListProductsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/product"
import { listProducts } from "../../internal/database/postgresql/product"

class ListProductsUseCaseRepository implements ListProductsUseCaseRepositoryInterface {
    async listProducts(): Promise<ProductEntity[]> {
        return await listProducts()
    }
}

export {
    ListProductsUseCaseRepository
}