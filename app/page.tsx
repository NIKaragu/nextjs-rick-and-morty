import { headerFont } from "./ui/fonts";
import AppFooter from "./ui/footer";
import AppHeader from "./ui/AppHeader/header";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto w-screen mt-6 mb-6 mr-8 ml-8 bg-orange-50 rounded-xl pl-6 pr-6 pt-4 pb-4 box-border">
      <AppHeader />
      <main className="">
        <div className="greeting">
          <h1 className={`${headerFont.className} text-5xl`}>
            Welcome to Rick & Morty fanlib page!
          </h1>
          <div>
            <p className="desription">
              Here you can find lots of information about your favorites
              characters <q>Rick & Motry</q>`s serial
            </p>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
