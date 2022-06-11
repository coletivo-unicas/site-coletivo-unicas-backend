import { TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ProductResponseEntity } from "../entity/product"
import { ListProductsUseCaseRepositoryInterface } from "./repository/product"
import { ListProductsUseCaseResponse } from "./ucio/product"

class ListProductsUseCase {
    public repository: ListProductsUseCaseRepositoryInterface

    constructor(repository: ListProductsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listProducts(): Promise<ListProductsUseCaseResponse> {
        try {
            const productList = await this.repository.listProducts()
            const data = []
            
            for (const product of productList) {
                const member = await this.repository.getMember(product.memberID)

                const responseEntity = new ProductResponseEntity(
                    product.ID,
                    product.title,
                    product.image1,
                    product.image2,
                    product.image3,
                    product.price,
                    product.category,
                    product.size,
                    product.available,
                    product.description,
                    product.color,
                    member
                )

                data.push(responseEntity)
            }

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