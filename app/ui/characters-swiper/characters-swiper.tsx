"use client";

import { headerFont } from "../fonts";
import CharacterCard from "./character-card/character-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

export default function CharacterSwiper({
  playDirection = "left",
}: {
  playDirection?: "left" | "right";
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={(windowWidth / 208) - 1}
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
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((slide) => (
        <SwiperSlide key={slide}>
          <CharacterCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
