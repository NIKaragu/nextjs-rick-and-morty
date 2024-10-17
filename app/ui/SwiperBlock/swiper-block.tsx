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
  }, [dispatch]);

  console.log(characters.length);

  return (
    <>
      <CharacterSwiper charArray={characters.slice(0, 200)} />
      <CharacterSwiper
        charArray={characters.slice(200, 400)}
        playDirection="right"
      />
      <CharacterSwiper charArray={characters.slice(400, 600)} />
    </>
  );
}
