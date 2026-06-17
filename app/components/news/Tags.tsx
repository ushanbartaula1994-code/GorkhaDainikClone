"use client"
import { useLanguage } from "@/app/context/LanguageContext";


interface Props {
  tags: string[];
  authorInitials: string;
  authorNE: string;
  authorEN: string;
  authorBioEN:string;
  authorBioNE:string;
}

function Tags({
  tags,
  authorInitials,
  authorNE,
  authorEN,
  authorBioEN,
  authorBioNE,
}: Props) {
  const { lang } = useLanguage();
  return (
    <div className="w-full lg:max-w-[860px] flex flex-col gap-2 pt-3 pb-3 md:pt-[13px] md:pb-[13px] lg:pt-[14px] lg:pb-[14px]">
      <div className="flex flex-wrap gap-2">
        <p className="flex items-center font-semibold text-[14.4px] leading-[23px] text-[#7A7470]">
          {lang == "EN" ? "Tags:" : "ट्यागहरू:"}
        </p>
        {tags.map((item, index) => (
          <div key={index}>
            <p className="inline-flex items-center justify-center px-[14px] py-[5px] rounded-[6px] border border-black/10 w-auto min-w-[55px] h-[34px] font-normal text-[13.6px] leading-[21.76px] text-[#7A7470]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full lg:max-w-[860px] flex flex-col gap-[14px] rounded-[8px] border border-black/10 bg-white p-[18px]">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-[64px] h-[64px] flex justify-center items-center bg-[#EDEAE3] rounded-full ">
            {authorInitials}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-nep font-bold text-[12.8px] leading-[20.48px] tracking-[0.51px] uppercase text-[#7A7470]">
              {lang === "EN" ? "About Author" : "लेखकको बारेमा"}
            </p>
            <p className="font-nep font-bold text-[15px] sm:text-[16.8px] leading-[26.88px] tracking-normal text-[#111110]">
              {lang === "EN" ? authorEN : authorNE}
            </p>
            <p className="font-nep font-normal text-[15px] sm:text-[16.8px] leading-[25.6px] tracking-normal text-[#3D3B38]">
              {lang === "EN" ? authorBioEN : authorBioNE}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tags
