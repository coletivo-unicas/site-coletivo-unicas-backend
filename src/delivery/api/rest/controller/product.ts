import { Request, Response } from "express"
import { ListProductsUseCase } from "../../../../domain/usecase/product"
import { ListProductsUseCaseRepository } from "../../../../infrastructure/provider/repository/product"
import { InternalServerErrorResponse, SuccessResponse } from "../response/response"

class ListProductsController {
    async listProducts(req: Request, res: Response): Promise<void> {
        const repository = new ListProductsUseCaseRepository()
        const usecase = new ListProductsUseCase(repository)

        const ucRes = await usecase.listProducts()

        if (ucRes.error) {
            new InternalServerErrorResponse().internalServerError(res, ucRes.error)
        } else {
            new SuccessResponse().success(res, ucRes.products)
        }
    }
}

export {
    ListProductsController
}