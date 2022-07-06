require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import typeDefs from './allSchemas';
import { graphqlPort } from './settings';
import allResolvers from './allResolvers';
import allDataSources from './allDataSources';


const server = new ApolloServer({
  dataSources: allDataSources,
  typeDefs,
  resolvers: allResolvers,
  context: ({ req }) => {
    const headers = req.headers;
    const token = headers.authorization || '';
    return { token };

  },
});

server.listen(graphqlPort).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${graphqlPort}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
