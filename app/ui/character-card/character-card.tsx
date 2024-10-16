import Image from "next/image";
import { headerFont } from "../fonts";

export default async function CharacterCard() {
  const rickInfo = await fetch(
    "https://rickandmortyapi.com/api/character/?name=rick"
  ).then((info) => info.json());

  return (
    <div className="flex flex-col h-fit w-48 lg:w-52 pt-3 pb-3 pl-3 pr-4 justify-center border-orange-950 border-solid border-2 rounded-lg">
      <div className="flex justify-center mb-2">
        <Image
          src={`${rickInfo.results[0].image}`}
          alt="rick photo"
          height={156}
          width={156}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3 className={`${headerFont.className} text-2xl`}>Rick</h3>
        <p className="status">
          <b className="text-2xl text-green-500">Alive</b>
        </p>
      </div>
      <hr className="mt-2 mb-1 border-black border-b-2" />
      <div className="flex justify-start flex-col">
        <p className="gender">
          <b>Sex:</b> Male
        </p>
        <p className="species">
          <b>Species:</b> Human
        </p>
        <p className="subspecies">
          <b>Subspecies:</b> Cool human
        </p>
        <p className="birthday">
          <b>Birthday:</b> 12.01.1964
        </p>
        <p className="origin-location">
          <b>Origin location:</b> Earth
        </p>
      </div>
    </div>
  );
}
