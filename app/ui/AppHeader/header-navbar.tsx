"useClient";

import Link from "next/link";
import { secondaryFont } from "../fonts";

export function HeaderNavbar() {
  return (
    <nav className="flex flex-auto justify-between md:gap-10">
      <Link
        href={"/"}
        className={`${secondaryFont.className} hover:drop-shadow-black transition duration-100 text-xl`}
      >
        About
      </Link>
      <Link
        href={"/"}
        className={`${secondaryFont.className} hover:drop-shadow-black transition duration-100 text-xl`}
      >
        Episodes
      </Link>
      <Link
        href={"/"}
        className={`${secondaryFont.className} hover:drop-shadow-black transition duration-100 text-xl`}
      >
        Locations
      </Link>
    </nav>
  );
}
