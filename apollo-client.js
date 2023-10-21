import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://varioso-668b109fd65d.herokuapp.com/",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
