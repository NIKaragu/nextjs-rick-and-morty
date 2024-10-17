import Image from "next/image";
import { headerFont } from "../../fonts";
import { Character } from "@/app/lib/types/character";
import classNames from "classnames";
import { Status } from "@/app/lib/enums/char-status";

export default function CharacterCard({ charInfo }: { charInfo: Character }) {
  return (
    <div className="flex flex-col flex-1 hover:scale-105 transition-transform h-fit w-full max-w-52 pt-3 pb-3 pl-3 pr-4 justify-center border-orange-950 border-solid border-2 rounded-lg hover:shadow-2xl">
      <div className="flex justify-center mb-2">
        <Image
          src={charInfo.image}
          alt="character photo"
          height={156}
          width={156}
          className="rounded-lg h-full w-full"
        />
      </div>
      <div className="flex flex-row justify-between items-center gap-2">
        <h3
          className={`${headerFont.className} text-2xl text-ellipsis whitespace-nowrap overflow-hidden`}
        >
          {charInfo.name}
        </h3>
        <p className="status">
          <b
            className={classNames("text-2xl", {
              "text-green-500": charInfo.status === Status.Alive,
              "text-red-900": charInfo.status === Status.Dead,
              "text-gray-300": charInfo.status === Status.Unknown,
            })}
          >
            {charInfo.status}
          </b>
        </p>
      </div>
      <hr className="mt-2 mb-1 border-black border-b-2" />
      <div className="flex justify-start flex-col">
        <p className="gender">
          <b>Sex:</b> {charInfo.gender}
        </p>
        <p className="text-ellipsis whitespace-nowrap overflow-hidden">
          <b>Species:</b> {charInfo.species}
        </p>
        <p className=" text-ellipsis whitespace-nowrap overflow-hidden">
          <b>Subspecies:</b> {charInfo.type.length ? charInfo.type : "None"}
        </p>
        <p className="birthday">
          <b>Birthday:</b> {charInfo.created.slice(0, 10)}
        </p>
        <p className="text-ellipsis whitespace-nowrap overflow-hidden">
          <b>O-Location:</b> {charInfo.location.name}
        </p>
      </div>
    </div>
  );
}
