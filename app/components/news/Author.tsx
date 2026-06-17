"use client"
import { useLanguage } from "@/app/context/LanguageContext";
interface Props {
  authorEN: string;
  authorNE: string;
  authorInitials: string;
  createdAtNE: string;
  createdAtEN: string;
  readTimeEN:string;
  readTimeNE:string;
}

export default function Author({
  authorEN,
  authorNE,
  authorInitials,
  readTimeEN,readTimeNE,createdAtNE,
  createdAtEN,
}: Props) {
  const { lang } = useLanguage();
  return (
    <div className="w-full pt-[9px] flex items-center gap-[12px]">
      <span className="w-[34px] h-[34px] rounded-full bg-[#EDEAE3] flex items-center justify-center shrink-0 font-nep font-bold text-[11.5px] leading-[18.43px] tracking-normal text-center align-middle text-[#7A7470]">
        {authorInitials}
      </span>
      <h3 className="font-nep flex items-center font-nep font-semibold text-[15.2px] leading-[24.32px] tracking-normal align-middle text-[#7A7470]">
        {lang === "EN" ? authorEN : authorNE}
      </h3>
      <h3 className="flex items-center font-nep font-bold text-[11.5px] leading-[18.43px] tracking-normal text-center align-middle text-[#7A7470]">
        {lang === "EN" ? createdAtEN : createdAtNE}
      </h3>
      <h3 className="flex items-center font-nep font-normal text-[12.5px] leading-[19.97px] tracking-normal align-middle "> {lang === "EN" ? readTimeEN : readTimeNE}</h3>
    </div>
  );
}


