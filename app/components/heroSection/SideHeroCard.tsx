"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import type { SideNews } from "@/types/body.type";
import { sideNewsTitleStyle } from "@/app/styles/hero.style";
import { sideNewsCreatedAtStyle } from "@/app/styles/hero.style";

interface Props {
  news: SideNews;
}

const SideHeroCard = ({ news }: Props) => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-row md:flex-col lg:flex-row bg-white hover:bg-[#EDEAE3] border-b border-black/20">
      <div
        className="relative overflow-hidden rounded-[4px] bg-white w-[100px] h-[75px]
     md:w-full md:h-[120px] lg:w-[100px] lg:h-[75px] flex-shrink-0"
      >
        <Image
          src={news.image}
          alt=""
          fill
          className="w-full h-full object-cover lg:rounded-none  sm:rounded-sm"
        />
      </div>

      <div
        className=" flex flex-col justify-between p-3 md:p-3 gap-1
        "
      >
        <h3 className={sideNewsTitleStyle}>
          {lang === "EN" ? news.titleEN : news.titleNE}
        </h3>

        <p className={sideNewsCreatedAtStyle}>
          {lang === "EN" ? news.createdAtEN : news.createdAtNE}
        </p>
      </div>
    </div>
  );
};

export default SideHeroCard;
