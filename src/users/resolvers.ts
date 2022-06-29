import { TypeUser, TypeUserBody, iUserDataSource } from './types';

export const resolvers = {

  Query: {
    getUser: (_: undefined,
           { _id }: { _id: string },
           { dataSources }: { dataSources: iUserDataSource }): TypeUser => {
      return dataSources.userAPI.getUser(_id);
    },
  },

  Mutation: {
    login: (_: undefined,
            { email, password }: { email: string, password: string },
            { dataSources }: { dataSources: iUserDataSource }) => {
      return dataSources.userAPI.login(email, password);
    },

    register: (_: undefined,
               { body }: { body: TypeUserBody },
               { dataSources }: { dataSources: iUserDataSource }) => {
      return dataSources.userAPI.register(body);
    },
  },
};
