import { ApolloQueryResult, gql } from "@apollo/client";
import { query } from "../../apollo/apollo-client";
import { CharAnswer } from "../../types/charAnswer";
import { Character } from "../../types/character";

export async function queryChar(id: number): Promise<Character> {
  const response: ApolloQueryResult<CharAnswer> = await query({
    query: gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  `,
  });

  return response.data.character;
}
