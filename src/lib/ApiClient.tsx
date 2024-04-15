

import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";
const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    defaultOptions: {
        mutate: {
            errorPolicy: "all",
        },
        query: {
            errorPolicy: "all",
        },
    },
});

export default client;
