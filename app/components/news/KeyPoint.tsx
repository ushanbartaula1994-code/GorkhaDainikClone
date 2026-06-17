"use client";
import { useLanguage } from "@/app/context/LanguageContext";
interface Props {
  keyPointsNE: string;
  keyPointsEN: string;
  keyPoint:string;
}
export default function KeyPoint({keyPoint,keyPointsNE,keyPointsEN }: Props) {
  const { lang } = useLanguage();
  console.log(keyPoint,keyPointsEN,keyPointsEN)
  return (
    <div className="w-full pt-[5px]">
      <div className="flex flex-col gap-1">
        <p className="font-nep font-bold text-[17px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[32px] lg:leading-[37px] tracking-normal text-[#111110]">
          {lang === "EN" ? "Key Points" : "मुख्य बुँदाहरू"}
        </p>
        <p
          className="font-nep text-[16px] md:text-[17.6px] leading-[29.6px] 
      md:leading-[32.56px] text-[#111110] font-normal"
        >
          {" "}
          {keyPoint}
        </p>
        <p
          className="font-nep text-[16px] md:text-[17.6px] leading-[29.6px] 
      md:leading-[32.56px] text-[#111110] font-normal"
        >
          {lang === "EN" ? keyPointsEN : keyPointsNE}
        </p>
      </div>
    </div>
  );
}
