"use client"
import { useLanguage } from "@/app/context/LanguageContext";
interface Props{
    
    titleNE:string,
    titleEN:string,
}

export default function Title({titleNE,titleEN}:Props) {
    const {lang}=useLanguage()
  return (
    <div className="w-full pt-[7px] md:pt-[6px] lg:pt-[7px]">
      <p className="font-nep font-semibold text-[36px] leading-[45px] tracking-normal align-middle text-[#111110]">
        {lang === "EN" ? titleEN : titleNE}
      </p>
    </div>
  );
}


