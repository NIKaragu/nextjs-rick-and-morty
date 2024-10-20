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
    if (!characters.length) {
      dispatch(loadCharacters());
    } else dispatch(setCharacters(data));
  }, [dispatch, characters.length, data]);

  return (
    <>
      <CharacterSwiper
        key={"kjh23vb4k213h4k1"}
        charArray={characters.slice(0, Math.floor(characters.length / 3) + 1)}
      />
      <CharacterSwiper
        key={"l1kj2b341"}
        charArray={characters.slice(
          Math.floor(characters.length / 3) + 1,
          Math.floor(characters.length / 3) * 2 + 3
        )}
        playDirection="right"
      />
      <CharacterSwiper
        key={"p1o92341"}
        charArray={characters.slice(Math.floor(characters.length / 3) * 2 + 1)}
      />
    </>
  );
}
