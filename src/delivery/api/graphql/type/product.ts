import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { MemberEntity } from "../../../../domain/entity/member"
import { GetMemberController } from "../controller/member"
import { errorType } from "./error"
import { memberType } from './member'

const productType = new GraphQLObjectType({
    name: 'productType',
    fields: {
        ID: { type: GraphQLInt },
        title: { type: GraphQLString },
        image1: { type: GraphQLString },
        image2: { type: GraphQLString },
        image3: { type: GraphQLString },
        price: { type: GraphQLFloat },
        category: { type: GraphQLString },
        size: { type: GraphQLString },
        available: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        color: { type: GraphQLString },
        memberID: { type: GraphQLInt },
        member: {
            type: memberType,
            resolve: async (params: any): Promise<MemberEntity | null> => {
                const { memberID } = params
                const response = await new GetMemberController().getMember({ ID: memberID })
                return response.member || null
            }
        }
    }
})

const listProductsResponseType = new GraphQLObjectType({
    name: 'listProductsResponseType',
    fields: {
        products: { type: new GraphQLList(productType) },
        error: { type: errorType }
    }
})

export {
    listProductsResponseType
}