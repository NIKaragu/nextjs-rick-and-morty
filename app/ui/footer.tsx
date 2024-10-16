import Link from "next/link";
import { secondaryFont } from "./fonts";

export default function AppFooter() {
  return (
    <footer className="mt-4">
      <div className="border-b-2 border-black"></div>
      <div className="info mt-3">
        <nav className="flex flex-auto justify-between md:gap-10">
          <a href={"/"} className={`${secondaryFont.className} header-link`} target="_blank"
            rel="noopener noreferrer">
            Github
          </a>
          <a href={"/"} className={`${secondaryFont.className} header-link`} target="_blank"
            rel="noopener noreferrer">
            Donate
          </a>
          <a href={"/"} className={`${secondaryFont.className} header-link`} target="_blank"
            rel="noopener noreferrer">
            About dev
          </a>
        </nav>
      </div>
    </footer>
  );
}
