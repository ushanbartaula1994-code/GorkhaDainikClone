"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import type { HeroNews } from "@/types/body.type";
import {heroTitleStyle} from '@/app/styles/hero.style'
import { heroDescriptionStyle } from "@/app/styles/hero.style";
import { heroAuthorStyle } from "@/app/styles/hero.style";
import { heroCreatedAtStyle } from "@/app/styles/hero.style";

interface MainHeroCardProps {
  news: HeroNews;
}

const MainHeroCard = ({ news }: MainHeroCardProps) => {
  const { lang } = useLanguage();

  return (
    <section className="w-full bg-[#EDEAE3]">
      <div className="relative w-full h-[200px] lg:h-[483px] overflow-hidden bg-[#EDEAE3]">
        <Image
          src={news.image}
          alt={lang === "EN" ? news.titleEN : news.titleNE}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 p-2 bg-white">
        <h1 className={heroTitleStyle}>
          {lang === "EN" ? news.titleEN : news.titleNE}
        </h1>

        <p className={heroDescriptionStyle}>
          {lang === "EN" ? news.descriptionEN : news.descriptionNE}
        </p>

        <div className="flex items-center gap-3">
          <p className={heroAuthorStyle}>
            {lang === "EN" ? news.authorEN : news.authorNE}
          </p>

          <p className={heroCreatedAtStyle}>
            {lang === "EN" ? news.createdAtEN : news.createdAtNE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHeroCard;
