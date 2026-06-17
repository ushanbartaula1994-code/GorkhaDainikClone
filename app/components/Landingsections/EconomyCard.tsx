"use client";

import type { Category } from "@/types/catagory.type";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { previewCardVariants, imageVariants } from "@/app/animation/card";

interface Props {
  newsItem: Category["news"][number];
  index: number;
}

export default function EconomyCard({ newsItem, index }: Props) {
  const { lang } = useLanguage();

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <motion.div
        variants={previewCardVariants(index)}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="flex flex-col w-full bg-white rounded-[8px] border-t border-[#0000001A] overflow-hidden"
      >
        <div className="relative w-full aspect-[246/138] bg-[#EDEAE3] overflow-hidden shrink-0">
          <motion.div variants={imageVariants} className="absolute inset-0">
            <Image
              src={newsItem.image || "/gorkhasamachar/preview.png"}
              alt={newsItem.titleEN}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-[6px] pt-[22px] pr-[16px] pb-[18px] pl-[16px]">
          <p className="font-nep font-semibold text-[16px] sm:text-[18.4px] leading-[24px] sm:leading-[27.6px] text-[#111110] line-clamp-2">
            {lang === "EN" ? newsItem.titleEN : newsItem.titleNE}
          </p>
          <p className="font-nep font-normal text-[13px] sm:text-[14px] leading-[22.4px] text-[#7A7470]">
            {lang === "EN" ? newsItem.createdAtEN : newsItem.createdAtNE}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
