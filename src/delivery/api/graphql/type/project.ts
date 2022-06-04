import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const projectType = new GraphQLObjectType({
    name: 'projectType',
    fields: {
        ID: { type: GraphQLInt },
        title: { type: GraphQLString },
        location: { type: GraphQLString },
        donation: { type: GraphQLString }
    }
})

const listProjectsResponseType = new GraphQLObjectType({
    name: 'listProjectsResponseType',
    fields: {
        projects: { type: new GraphQLList(projectType) },
        error: { type: errorType }
    }
})

export {
    listProjectsResponseType
}