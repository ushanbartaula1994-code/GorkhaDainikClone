"use client"
import { usePathname } from "next/navigation";
import {  Link2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";


function Social() {
    const pathname = usePathname();
    const url = `https://domain.com${pathname}`;
    const {lang}=useLanguage()
    const buttonClass =
      "h-[35px] px-4 py-[8px] cursor-pointer m rounded-[6px] text-[14.4px] font-semibold leading-none flex items-center justify-center whitespace-nowrap";

      const facebookShare = () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer",
        );
      };
      const twitterShare = () => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer",
        );
      };
       const copyLink = async () => {
         try {
           await navigator.clipboard.writeText(url);
         } catch (error) {
           console.error("Failed to copy link:", error);
         }
       };
    
  return (
    <div className="w-full pt-[9px] flex items-center gap-[12px]">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={facebookShare}
          className={`${buttonClass} min-w-[101px] bg-[#1877F2] border border-[#1877F2] text-white  `}
        >
          Facebook
        </button>

        <button
          onClick={twitterShare}
          className={`${buttonClass} min-w-[108px] bg-black border border-black text-white`}
        >
          Twitter
        </button>

        <button
          onClick={copyLink}
          className={`${buttonClass} min-w-[107px] border text-[#111110] border-black/10 gap-2`}
        >
          <Link2 size={14} />
          {lang === "EN" ? "Copy Link" : " लिंक कपी"}
        </button>
      </div>
    </div>
  );
}

export default Social
