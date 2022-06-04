import { ProductEntity } from "../../../../../domain/entity/product"
import { ProductModel } from "../model/product"

function toProductEntity(m: ProductModel): ProductEntity {
    return new ProductEntity(
        m.ID,
        m.title,
        m.image1,
        m.image2,
        m.image3,
        m.price,
        m.category,
        m.size,
        m.available,
        m.description,
        m.memberID,
        m.color
    )
}

export {
    toProductEntity
}