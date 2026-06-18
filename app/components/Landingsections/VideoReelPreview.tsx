"use client";

import { useState } from "react";
import type { Category } from "@/types/catagory.type";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import FilterCard from "@/app/components/category/FilterCard";
import { previewCardVariants } from "@/app/animation/card";

interface Props {
  category: Category;
}

function VideoReelsPreview({ category }: Props) {
  const { lang } = useLanguage();
  const [activePrimary, setActivePrimary] = useState("all");

  const filteredNews = category.news.filter((item) =>
    activePrimary === "all"
      ? true
      : item.category?.toLowerCase() === activePrimary.toLowerCase(),
  );

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN="Video Reels"
          titleNE="भिडियो रिल्स"
          href="/video"
        />

        <FilterCard
          category={category}
          activePrimary={activePrimary}
          activeSecondary="all"
          onPrimaryChange={setActivePrimary}
          onSecondaryChange={() => {}}
        />

        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#C01C28] scrollbar-track-transparent">
          {filteredNews.map((item, index) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id.EN}
              className="shrink-0 w-[38%] sm:w-[28%] md:w-[22%] lg:w-[28%]"
            >
              <motion.div
                variants={previewCardVariants(index)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[3/4] rounded-[8px] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.image || "/gorkhasamachar/preview.png"}
                  alt={item.titleEN}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {item.duration && (
                  <span className="absolute top-3 right-3 bg-black/80 font-extrabold text-white font-mono text-[14px] px-2.5 py-1.5 rounded">
                    {item.duration}
                  </span>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[white] flex items-center justify-center z-20">
                    <Play
                      size={14}
                      fill="gray"
                      stroke="none"
                      className="ml-0.5"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 md:gap-3 px-[10px] pb-[14px]">
                  <span className="self-start bg-[#C01C28] text-white text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 rounded">
                    {item.category}
                  </span>
                  <p className="font-nep font-semibold text-[13px] sm:text-[15px] md:text-[16px] leading-[21px] md:leading-[22px] text-white line-clamp-2">
                    {lang === "EN" ? item.titleEN : item.titleNE}
                  </p>

                  <p className="font-nep font-normal text-[11px] sm:text-[12px] leading-[18px] text-white/70">
                    {lang === "EN" ? item.createdAtEN : item.createdAtNE}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoReelsPreview;
