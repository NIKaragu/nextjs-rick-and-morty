import { gql } from "@apollo/client";
// import { getCharacters } from "../api";
import { query } from "../../apollo/apollo-client";

// export const fetchChars = async () => {
//   const response = await Promise.allSettled(
//     Array.from({ length: 9 }, (_, i) => getCharacters(`page=${i + 1}`))
//   );

//   const successfulResponses = response
//     .filter((result) => result.status === "fulfilled") // Тільки успішні проміси
//     .map((result) => result.value);

//   return successfulResponses; // Повертаємо масив з успішними результатами
// };

export async function fetchCharsForCard(page: number) {
  const response = await query({
    query: gql`
    query {
      characters(page: ${page}) {
        results {
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

  return response;
}
