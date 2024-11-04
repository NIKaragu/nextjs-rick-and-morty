// import { SuspenseCache } from "@apollo/experimental-nextjs-app-support/ssr";
import { HttpLink } from "@apollo/client/link/http";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
    ssrMode: typeof window === "undefined",
    defaultOptions: {
      watchQuery: {
        nextFetchPolicy: "cache-first",
      },
    },
  });
});
// export const suspenseCache = new SuspenseCache();
