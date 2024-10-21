import { fetchCharsForCard } from "./lib/api/fetches/fetchChars";
import { Character } from "./lib/types/character";
import { headerFont } from "./ui/fonts";
import SwiperBlock from "./ui/SwiperBlock/swiper-block";
import TVIcon from "./ui/TV-icon.svg";

export default async function Home() {
  const charsResponse = await Promise.allSettled([
    fetchCharsForCard(1),
    fetchCharsForCard(15),
    fetchCharsForCard(29),
  ]).then((responses) =>
    responses.map(
      (response) => response.status === "fulfilled" && response.value
    )
  );
  const chars: Character[] = charsResponse
    .map((resp) => resp.data.characters.results)
    .flat();

  // console.log("GraphQL RESPONSE: ", chars);

  return (
    <main className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center sm:flex-row sm:items-end">
        <div className="grid grid-auto grid-auto w-full">
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

          <div className="banner-tv-grid-pos flex flex-1 pl-4 pt-4 w-full h-full min-w-36 justify-center rounded-2xl bg-orange-50 col-start-3 col-end-3 row-start-2 justify-self-end z-10 relative">
            <TVIcon className="w-56 h-56 tv" />
            <div className="absolute tv-screen">
              <iframe
                className="w-full h-full -z-50"
                width="100%"
                height="100%"
                src="https://s6.streamani.top/video1/VqmsfSMnOlEIPLx1R3HTCQ/1729213789/rickandmorty/1/original/101.mp4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 swiper-father">
        <h2 className={`${headerFont.className} text-4xl`}>Characters</h2>
        <SwiperBlock data={chars} />
      </div>
    </main>
  );
}
