"use client";

import { HttpLink } from "@apollo/client/link/http";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const client = () => {
  const httpLink = new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    ssrMode: typeof window === "undefined",
  });
};

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}
