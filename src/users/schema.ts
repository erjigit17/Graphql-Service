import { gql } from 'apollo-server';

export const typeDef = gql`
    extend type Query {
        getUser(_id: ID!): User
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    input UserBody {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    type JWT {
        jwt: String!
    }

    extend type Mutation {
        register(body: UserBody): User
        login(email: String!, password: String!): JWT
    }
`;
