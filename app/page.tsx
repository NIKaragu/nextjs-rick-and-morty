import { fetchChars } from "./lib/api/fetches/fetchChars";
import { headerFont } from "./ui/fonts";
import SwiperBlock from "./ui/SwiperBlock/swiper-block";
// import AppFooter from "./ui/footer";
import TVIcon from "./ui/TV-icon.svg";

export default async function Home() {
  const response = await fetchChars();
  const characters = response.map((page) => page.results).flat();

  return (
    <main className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center sm:flex-row sm:items-end">
        <div className="grid grid-auto grid-auto w-full">
          {/* <div className="bg-orange-300 pl-6 pr-6 pb-4 pt-4 rounded-2xl box-content col-start-1 col-end-3"> */}
          <h1
            className={`${headerFont.className} banner-header-grid-pos text-5xl bg-orange-300 pl-6 pr-6 pb-4 pt-4 rounded-2xl box-border h-fit col-start-1 col-end-4 row-start-1 row-end-1 rounded-bl-none`}
          >
            Welcome to Rick & Morty fanlib page!
          </h1>

          <p className="banner-text-grid-pos bg-orange-300 pl-6 pr-6 pb-4 rounded-2xl box-border col-start-1 col-end-3 row-start-2 row-end-2 h-full font-bold rounded-tl-none rounded-tr-none relative">
            Here you can find lots of information about your favorite characters
            Rick & Motry`s serial
            <span className="banner-smooth-angle-display h-8 w-8 bg-orange-300 rounded-full absolute -right-4 -top-4 -z-0"></span>
          </p>

          {/* </div> */}
          <div className="banner-tv-grid-pos flex flex-1 pl-4 pt-4 w-full h-full min-w-36 justify-center rounded-2xl bg-orange-50 col-start-3 col-end-3 row-start-2 justify-self-end z-10">
            <TVIcon className="w-56 h-56 tv" />
          </div>
        </div>
      </div>
      <div className="mt-16 swiper-father">
        <h2 className={`${headerFont.className} text-4xl`}>Characters</h2>
        <SwiperBlock data={characters} />
      </div>
    </main>
  );
}
