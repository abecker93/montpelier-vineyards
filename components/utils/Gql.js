import { GraphQLClient } from 'graphql-request'
const endpoint = process.env.HYGRAPH_API_ENDPOINT || process.env.GRAPH_CMS_API_ENDPOINT
export const client = new GraphQLClient(endpoint);
