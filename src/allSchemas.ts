import { gql } from 'apollo-server';
import { typeDef as User } from './users/schema';

const Query = gql`
    type Query
    type Mutation
`;

const typeDefs = [Query, User];
export default typeDefs;