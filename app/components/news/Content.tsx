"use client";
import { useLanguage } from "@/app/context/LanguageContext";
interface Props {
  contentNE: string;
  contentEN: string;
}
export default function Content({ contentNE, contentEN }: Props) {
  const { lang } = useLanguage();
  return (
    <div className="w-full pt-[5px]">
      <p className="font-nep text-[16px] md:text-[17.6px] leading-[29.6px] 
      md:leading-[32.56px] text-[#111110] font-normal">
        {lang === "EN" ? contentEN : contentNE}
      </p>
    </div>
  );
}
