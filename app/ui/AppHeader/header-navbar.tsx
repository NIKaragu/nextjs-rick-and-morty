"useClient";

import Link from "next/link";
import { secondaryFont } from "../fonts";

export function HeaderNavbar() {
  return (
    <nav className="flex flex-auto justify-between md:gap-10">
      <Link href={"/"} className={`${secondaryFont.className} header-link`}>
        Chars
      </Link>
      <Link href={"/"} className={`${secondaryFont.className} header-link`}>
        Episodes
      </Link>
      <Link href={"/"} className={`${secondaryFont.className} header-link`}>
        Locations
      </Link>
    </nav>
  );
}
