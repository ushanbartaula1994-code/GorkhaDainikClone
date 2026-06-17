"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { headlines } from "@/app/data/navbar.data";

const Ticker = () => {
  const { lang } = useLanguage();

  return (
    
      <div className="hidden h-12 md:flex w-full fixed top-[4rem] bg-white border-b border-[#E5E5E5] z-40 items-center overflow-hidden">
        
        <div
          className={`shrink-0 h-12 px-[18px] gap-[7px] font-nep flex items-center bg-[#C01C28] whitespace-nowrap ${
            lang === "NE" ? "w-[116px]" : "w-auto min-w-[140px]"
          }`}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-white animate-dot-glow block shrink-0"></span>

         
          <span className="text-[17.6px] text-white leading-[23px] font-bold tracking-[0.02em]">
            {lang === "NE" ? "ताजा खबर" : "Latest News"}
          </span>
        </div>

        
        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex items-center gap-10 whitespace-nowrap animate-scroll px-4">
            {[...headlines, ...headlines].map((headline, index) => (
              <div
                key={headline.id + "-" + index}
                className="flex items-center gap-2 shrink-0 whitespace-nowrap group"
              >
               
                <span className="w-1 h-1 rounded-full bg-red-600"></span>

                
                <span className="md:text-[15px] lg:text-[16.8px] leading-[26.88px] font-normal text-[#3D3B38] whitespace-nowrap group-hover:text-[#C01C28] transition-colors">
                  {headline.title[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Ticker;
