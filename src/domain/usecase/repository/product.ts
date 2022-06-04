import { ProductEntity } from "../../entity/product"

interface ListProductsUseCaseRepositoryInterface {
    listProducts(): Promise<ProductEntity[]>
}

export {
    ListProductsUseCaseRepositoryInterface
}