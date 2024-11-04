import { secondaryFont } from "@/app/ui/fonts";

export default async function NotFound() {
  return (
    <div className={`${secondaryFont.className} text-2xl`}>
      Oops, you found abandoned page, congratulations!
    </div>
  );
}
