"use client";

import type { Category } from "@/types/catagory.type";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { previewCardVariants } from "@/app/animation/card";

interface Props {
  newsItem: Category["news"][number];
  index: number;
}

export default function VideoPreviewCard({ newsItem, index }: Props) {
  const { lang } = useLanguage();

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <motion.div
        variants={previewCardVariants(index)}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="flex flex-col w-full h-full bg-white rounded-[8px] border-t border-[#0000001A] overflow-hidden"
      >
        <div className="relative w-full aspect-[246/138] bg-[#111110] overflow-hidden shrink-0 group">
          <Image
            src={newsItem.image || "/gorkhasamachar/preview.png"}
            alt={newsItem.titleEN}
            fill
            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full  bg-[white] flex items-center justify-center">
              <Play size={16} fill="gray" stroke="none" className="text-white ml-0.5" />
            </div>
          </div>

          {newsItem.duration && (
            <span className="absolute bottom-2 right-2 bg-black/70 text-white font-mono text-[11px] px-2 py-0.5 rounded">
              {newsItem.duration}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[6px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] flex-1">
          <p className="font-nep font-semibold text-[16px] leading-[23px] text-[#111110] line-clamp-2 min-h-[46px]">
            {lang === "EN" ? newsItem.titleEN : newsItem.titleNE}
          </p>
          <p className="font-nep font-normal text-[13px] leading-[22.4px] text-[#7A7470]">
            {lang === "EN" ? newsItem.createdAtEN : newsItem.createdAtNE}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
