import { ApolloQueryResult, gql } from "@apollo/client";
import { query } from "../../apollo/apollo-client";
import { Character } from "../../types/character";
import { ServerAnswer } from "../../types/serverAnswer";

export async function fetchCharsForCard(page: number) {
  const response: ApolloQueryResult<ServerAnswer> = await query({
    query: gql`
    query {
      characters(page: ${page}) {
        results {
          id
          name
          image
          status
          gender
          species
          type
          location {
            name
          }
        }
      }
    }
  `,
  });

  return response.data.characters.results;
}

export async function fetchCharsFirstly(): Promise<Character[]> {
  const charsResponse = await Promise.allSettled([
    fetchCharsForCard(1),
    fetchCharsForCard(15),
    fetchCharsForCard(29),
  ]).then((responses) =>
    responses.map((response) => {
      if (response.status === "fulfilled" && response.value) {
        return response.value;
      }
      return [];
    })
  );

  return charsResponse.flat();
}
