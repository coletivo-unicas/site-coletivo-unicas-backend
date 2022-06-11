import { MemberEntity } from "../../entity/member"
import { ProductEntity } from "../../entity/product"

interface ListProductsUseCaseRepositoryInterface {
    listProducts(): Promise<ProductEntity[]>

    getMember(ID: number): Promise<MemberEntity | null>
}

export {
    ListProductsUseCaseRepositoryInterface
}