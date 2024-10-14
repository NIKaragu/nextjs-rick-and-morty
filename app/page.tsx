import { headerFont } from "./ui/fonts";
import AppFooter from "./ui/footer";
import AppHeader from "./ui/AppHeader/header";
import Image from "next/image";
// import tvIcon from "./ui/TV-icon.svg";
import TVIcon from "./ui/TV-icon.svg";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto w-screen mt-6 mb-6 mr-8 ml-8 bg-orange-50 rounded-xl pl-6 pr-6 pb-4 box-border overflow-y-scroll hide-scrollbar">
      <AppHeader />
      <main className="flex">
        <div className="flex flex-1 bg-orange-300 pl-6 pt-4 mt-4 rounded-2xl relative">
          <div className="pb-4">
            <h1 className={`${headerFont.className} text-5xl`}>
              Welcome to Rick & Morty fanlib page!
            </h1>
            <div>
              <p className="desription font-bold">
                Here you can find lots of information about your favorites
                characters <q>Rick & Motry</q>`s serial Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Architecto recusandae
                eligendi assumenda ab unde beatae quo sunt eveniet corporis
                mollitia laboriosam reprehenderit labore sint voluptas,
                provident, exercitationem expedita ea at!
              </p>
            </div>
          </div>
          <div className="flex p-4 w-fit h-fit rounded-2xl rounded-r-none bg-orange-50">
            <TVIcon className="w-56 h-56" />
          </div>
        </div>
      </main>
      {/* <AppFooter /> */}
    </div>
  );
}
