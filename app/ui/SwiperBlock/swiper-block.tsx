"use client";

import { Character } from "@/app/lib/types/character";
import CharacterSwiper from "../characters-swiper/characters-swiper";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/reduxHooks";
import { useEffect } from "react";
import {
  loadCharacters,
  setCharacters,
} from "@/app/lib/redux/slices/characters";

export default function SwiperBlock({ data }: { data: Character[] }) {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    if (!data.length) {
      dispatch(loadCharacters(1));
      dispatch(loadCharacters(15));
      dispatch(loadCharacters(29));
    } else {
      dispatch(setCharacters(data));
    }
  }, [dispatch, characters.length, data]);

  return (
    <>
      <CharacterSwiper
        charArray={characters.slice(0, Math.floor(characters.length / 3) + 1)}
        // startPage={1}
      />
      <CharacterSwiper
        charArray={characters.slice(
          Math.floor(characters.length / 3) + 1,
          Math.floor(characters.length / 3) * 2 + 3,
        )}
        // startPage={15}
        playDirection="right"
      />
      <CharacterSwiper
        charArray={characters.slice(Math.floor(characters.length / 3) * 2 + 1)}
        // startPage={29}
      />
    </>
  );
}
