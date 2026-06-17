"use client";

import { useState } from "react";
import type { Category } from "@/types/catagory.type";
import { useLanguage } from "@/app/context/LanguageContext";
import FilterCard from "@/app/components/category/FilterCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import FilteredVideoCard from "./FilteredVideoCard";

interface Props {
  category: Category;
}

function VideoClient({ category }: Props) {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNews = category.news.filter((item) =>
    activeFilter === "all"
      ? true
      : item.category?.toLowerCase() === activeFilter.toLowerCase(),
  );

  const featured = filteredNews[0];

  return (
    <div className="flex flex-col gap-6 py-4">
      <FilterCard
        category={category}
        activePrimary={activeFilter}
        activeSecondary="all"
        onPrimaryChange={setActiveFilter}
        onSecondaryChange={() => {}}
      />

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full aspect-video bg-[#111110] rounded-[8px] overflow-hidden group cursor-pointer"
        >
          <Image
            src={featured.image || "/gorkhasamachar/preview.png"}
            alt={featured.titleEN}
            fill
            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          />

          {featured.duration && (
            <span className="absolute top-3 left-3 bg-black/70 text-white font-mono text-[12px] px-2 py-0.5 rounded">
              {featured.duration}
            </span>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-[#C01C28]/90 flex items-center justify-center"
            >
              <Play size={28} fill="white" className="text-white ml-1" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="font-nep font-semibold text-[18px] leading-[27px] text-white line-clamp-2">
              {lang === "EN" ? featured.titleEN : featured.titleNE}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-nep text-[13px] text-white/80">
                {lang === "EN" ? featured.authorEN : featured.authorNE}
              </p>
              <span className="text-white/50">·</span>
              <p className="font-nep text-[13px] text-white/80">
                {lang === "EN" ? featured.createdAtEN : featured.createdAtNE}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2 font-nep font-semibold text-[14.4px] px-4 h-[38px] rounded-[6px] bg-[#C01C28] text-white cursor-pointer"
        >
          <Play size={14} fill="white" stroke="none" />
          {lang === "EN" ? " Watch" : " हेर्नुहोस्"}
        </motion.button>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1 h-6 rounded bg-[#C01C28] shrink-0" />
        <h2 className="font-nep font-bold text-[16px] md:text-2xl md:mt-1 text-[#111110] whitespace-nowrap">
          {lang === "EN" ? "All Videos" : "सबै भिडियोहरू"}
        </h2>
      </div>
      <span className=" border-2 border-black" />
      <FilteredVideoCard news={filteredNews}/>
    </div>
  );
}

export default VideoClient;
