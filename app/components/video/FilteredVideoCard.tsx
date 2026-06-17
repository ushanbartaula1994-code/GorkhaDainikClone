"use client";

import type { Category } from "@/types/catagory.type";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {useState} from 'react'

interface Props {
  news: Category["news"];
}

function FilteredVideoCard({ news }: Props) {
  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? news : news.slice(0, 4);

  return (
    <div className="flex flex-col gap-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible.map((item, index) => (
          <motion.div
            key={item.id.EN}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            whileHover={{ y: -4, boxShadow: "0px 8px 20px rgba(0,0,0,0.10)" }}
            className="flex flex-col bg-white rounded-[8px] border-t border-[#0000001A] overflow-hidden cursor-pointer"
          >
           
            <div className="relative w-full aspect-[16/9] bg-[#111110] overflow-hidden group">
              <Image
                src={item.image || "/gorkhasamachar/preview.png"}
                alt={item.titleEN}
                fill
                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full  ring-white bg-[#C01C28]/90 flex items-center justify-center">
                  <Play size={18} fill="white" className="text-white ml-0.5" />
                </div>
              </div>

              {/* Duration — bottom right */}
              {item.duration && (
                <span className="absolute bottom-2 right-2 bg-black/70 text-white font-mono text-[11px] px-2 py-0.5 rounded">
                  {item.duration}
                </span>
              )}
            </div>

            {/* Text — 30% */}
            <div className="flex flex-col gap-[6px] px-[16px] pt-[14px] pb-[14px]">
              <p className="font-nep font-semibold text-[15px] leading-[23px] text-[#111110] line-clamp-2">
                {lang === "EN" ? item.titleEN : item.titleNE}
              </p>
              <p className="font-nep font-normal text-[13px] leading-[22px] text-[#7A7470]">
                {lang === "EN" ? item.createdAtEN : item.createdAtNE}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {news.length > 4 && (
        <div className="flex justify-center mt-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className="w-full md:w-[213px] h-[45px] px-[28px] rounded-[6px] border-2 border-[#C01C28] font-nep font-bold text-[16px] text-[#C01C28] hover:bg-[#C01C28] hover:text-white transition-colors"
          >
            {showAll
              ? lang === "EN"
                ? "Show Less"
                : "कम देखाउनुहोस्"
              : lang === "EN"
                ? "Load More Videos"
                : "थप भिडियो लोड गर्नुहोस्"}
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default FilteredVideoCard;
