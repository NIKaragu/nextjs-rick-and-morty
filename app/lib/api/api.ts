import { Character } from "../types/character";
import { Episode } from "../types/episode";

const BASE_URL = "https://rickandmortyapi.com/api/";

interface Info {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
}
type ServerResponse<T> = {
  info: Info;
  results: T[];
};

export async function get<T>(
  url: string,
  params: string
): Promise<ServerResponse<T>> {
  const request =
    params.length > 0 ? BASE_URL + url + "/?" + params : BASE_URL + url;
  const response = await fetch(request);

  return response.json();
}

export const getCharacters = async (params: string): Promise<ServerResponse<Character>> => {
  return await get<Character>("/character", params);
};
