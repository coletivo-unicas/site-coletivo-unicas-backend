import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const memberType = new GraphQLObjectType({
    name: 'memberType',
    fields: {
        ID: { type: GraphQLInt },
        name: { type: GraphQLString },
        pronoun: { type: GraphQLString },
        image: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        currentSector: { type: GraphQLString },
        role: { type: GraphQLString },
        linkedin: { type: GraphQLString },
        github: { type: GraphQLString },
        institutionalEmail: { type: GraphQLString },
        personalEmail: { type: GraphQLString },
        description: { type: GraphQLString },
        course: { type: GraphQLString },
        entrySemester: { type: GraphQLString },
        studentStatus: { type: GraphQLString },
        phoneNumber: { type: GraphQLString }
    }
})

const listMembersResponseType = new GraphQLObjectType({
    name: 'listMembersResponseType',
    fields: {
        members: { type: new GraphQLList(memberType) },
        error: { type: errorType }
    }
})

export {
    memberType,
    listMembersResponseType
}