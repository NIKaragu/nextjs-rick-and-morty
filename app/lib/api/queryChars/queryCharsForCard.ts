import { ApolloQueryResult, gql } from "@apollo/client";
import { query } from "../../apollo/apollo-client";
import { CharPageAnswer } from "../../types/charPageAnswer";

export async function queryCharsForCard(page: number) {
  const response: ApolloQueryResult<CharPageAnswer> = await query({
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
