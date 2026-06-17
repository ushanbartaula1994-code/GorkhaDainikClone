"use client"
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

interface Props {
  image: string;
  imageDescpEN: string;
  imageDescpNE: string;
}

export default function NewsImage({
  image,
  imageDescpEN,
  imageDescpNE,
}: Props) {
  const { lang } = useLanguage();

  return (
    <div className="w-full pt-[5px] flex flex-col gap-1 overflow-hidden">
      <div className="relative w-full h-[214.38px] md:h-[562px] lg:h-[496.75px] rounded-[8px] overflow-hidden bg-[#EDEAE3]">
        <Image src={image} alt="" fill className="object-cover rounded-[8px]" />
      </div>

      <p className="text-[13.6px] font-normal italic leading-[21.76px] text-[#7A7470]">
        {lang === "EN" ? imageDescpEN : imageDescpNE}
      </p>
    </div>
  );
}