import { MemberEntity } from "../../../domain/entity/member"
import { ProductEntity } from "../../../domain/entity/product"
import { ListProductsUseCaseRepositoryInterface } from "../../../domain/usecase/repository/product"
import { getMember } from "../../internal/database/postgresql/member"
import { listProducts } from "../../internal/database/postgresql/product"

class ListProductsUseCaseRepository implements ListProductsUseCaseRepositoryInterface {
    async getMember(ID: number): Promise<MemberEntity | null> {
        return await getMember(ID)
    }
    async listProducts(): Promise<ProductEntity[]> {
        return await listProducts()
    }
}

export {
    ListProductsUseCaseRepository
}