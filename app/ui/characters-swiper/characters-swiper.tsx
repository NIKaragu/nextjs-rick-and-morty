"use client";

import CharacterCard from "./character-card/character-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import "swiper/css";
import { useEffect, useId, useState } from "react";
import { Character } from "@/app/lib/types/character";

export default function CharacterSwiper({
  playDirection = "left",
  charArray,
  // startPage,
}: {
  playDirection?: "left" | "right";
  charArray: Character[];
  // startPage: number;
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const slideID = useId();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={windowWidth / 208 - 1}
      freeMode={true}
      loop={true}
      speed={10000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: playDirection === "right",
      }}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[FreeMode, Keyboard, Autoplay]}
      style={{ overflow: "visible" }}
      onSlideChange={(swiper) => {
        console.log(Math.floor(swiper.realIndex + (windowWidth / 208 - 1) + 1));
      }}
      onSwiper={async (swiper) => {
        swiper.autoplay.start();
      }}
    >
      {charArray.map((character) => (
        <SwiperSlide key={slideID + Math.random()}>
          <CharacterCard charInfo={character} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
