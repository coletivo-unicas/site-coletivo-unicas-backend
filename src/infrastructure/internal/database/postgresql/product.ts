import { ProductEntity } from "../../../../domain/entity/product"
import { ProductModelSequelize } from "./model/product"
import { toProductEntity } from "./transformer/product"

async function listProducts(): Promise<ProductEntity[]> {
    const response = await ProductModelSequelize.findAll({ raw: true })
    return response.map(el => toProductEntity(el))
}

export {
    listProducts
}