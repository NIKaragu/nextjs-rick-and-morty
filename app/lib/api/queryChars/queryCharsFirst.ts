import { Character } from "../../types/character";
import { queryCharsForCard } from "./queryCharsForCard";

export async function queryCharsFirst(): Promise<Character[]> {
  const charsResponse = await Promise.allSettled([
    queryCharsForCard(1),
    queryCharsForCard(15),
    queryCharsForCard(29),
  ]).then((responses) =>
    responses.map((response) => {
      if (response.status === "fulfilled" && response.value) {
        return response.value;
      }
      return [];
    }),
  );

  return charsResponse.flat();
}
