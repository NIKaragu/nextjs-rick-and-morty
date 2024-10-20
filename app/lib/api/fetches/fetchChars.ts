import { getCharacters } from "../api";

export const fetchChars = async () => {
  const response = await Promise.allSettled(
    Array.from({ length: 9 }, (_, i) => getCharacters(`page=${i + 1}`))
  );

  const successfulResponses = response
    .filter((result) => result.status === "fulfilled") // Тільки успішні проміси
    .map((result) => result.value);

  return successfulResponses; // Повертаємо масив з успішними результатами
};
