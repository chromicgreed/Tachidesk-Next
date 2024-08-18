import { GraphQLClient } from "graphql-request";

export const API_URL = process.env.API_URL!;

export const graphQLClient = new GraphQLClient(`${API_URL}/api/graphql`, {
  fetch,
});
