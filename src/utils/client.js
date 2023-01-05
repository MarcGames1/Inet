import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
  request: (operation) => {
    operation.setContext({
      fetchOptions: {
        timeout: 1200000, // timeout de 60 de secunde
      },
    });
  },
});

export default client;