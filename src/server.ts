require('dotenv').config()
import { ApolloServer } from "apollo-server";
import {typeDefs} from "./users/schema";
import {resolvers} from "./users/resolvers";
import {graphqlPort} from "./settings"
import {UserAPI} from "./users/datasources/user-api";

const dataSources = () => {
    return {
        userAPI: new UserAPI(),
    };
}

const server = new ApolloServer({
    dataSources,
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const headers = req.headers
        const token = headers.authorization || ''
        return { token }

    },
});

server.listen(graphqlPort).then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${graphqlPort}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
