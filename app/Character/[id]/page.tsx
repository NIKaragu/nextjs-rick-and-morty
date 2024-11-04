import { queryChar } from "@/app/lib/api/queryChars/queryChar";
import { headerFont } from "@/app/ui/fonts";
import Image from "next/image";

export default async function DetailedCharPage({
  params,
}: {
  params: { id: string };
}) {
  const char = await queryChar(Number(params.id));

  return (
    <div className="flex">
      <div className="flex justify-center">
        <Image
          src={char.image}
          alt="character photo"
          height={156}
          width={156}
          className="rounded-lg h-full w-full"
        />
      </div>
      <h2
        className={`${headerFont.className} text-5xl text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {char.name}
      </h2>
    </div>
  );
}
