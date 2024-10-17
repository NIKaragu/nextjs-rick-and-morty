"use client";

import CharacterCard from "./character-card/character-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { Character } from "@/app/lib/types/character";

export default function CharacterSwiper({
  playDirection = "left",
  charArray,
}: {
  playDirection?: "left" | "right";
  charArray: Character[];
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      slidesPerView={windowWidth / 200 - 1}
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
      onSwiper={(swiper) => {
        swiper.autoplay.start();
        console.log("slides:", windowWidth / 200 - 1);
        console.log(swiper.width);
      }}
    >
      {charArray.map((character) => (
        <SwiperSlide key={character.id}>
          <CharacterCard charInfo={character} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
