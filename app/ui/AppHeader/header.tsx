"use client";

import Image from "next/image";
import logo from "../rick-nd-morty-logo.png";
import { useEffect, useState } from "react";
import { HeaderNavbar } from "./header-navbar";
import { HeaderMenu } from "./header-menu";
import Lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function AppHeader() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    defineElement(Lottie.loadAnimation);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center mb-3 box-border md:gap-8 lg:gap-28 2xl:gap-52">
        <Image
          src={logo}
          alt="page logo"
          width={40}
          height={40}
          className="aspect-square rounded-sm object-cover"
        />

        {windowWidth >= 768 && <HeaderNavbar />}

        <div className="flex justify-center items-center gap-2 md:-right-1 sm:-right-1.5 relative">
          {/* @ts-expect-error lord-icon-issue-settings*/}
          <lord-icon
            src="https://cdn.lordicon.com/lecprnjb.json"
            trigger="click"
            style={{
              width: 40,
              height: 40,
            }}
          >
            {/* @ts-expect-error lord-icon-issue-settings*/}
          </lord-icon>

          {/* menu */}
          {windowWidth < 768 && <HeaderMenu />}
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
    </header>
  );
}
