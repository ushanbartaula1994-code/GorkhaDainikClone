"use client";

import { Category } from "@/types/catagory.type";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredCardVariants } from "@/app/animation/card";
import Link from "next/link";

interface Props {
  newsItem: Category["news"][number];
}

export default function LandingFeatureCard({ newsItem }: Props) {
  const { lang } = useLanguage();

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <motion.div
        variants={featuredCardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="flex flex-col w-full md:w-[416.625px] bg-white rounded-[8px] border-t border-[#0000001A] overflow-hidden"
      >
        <div className="relative w-full aspect-[320/180] md:aspect-[416/233] bg-[#EDEAE3] overflow-hidden shrink-0 ">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={newsItem.image || "/gorkhasamachar/preview.png"}
              alt={newsItem.titleEN}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

     
        <div className="flex flex-col gap-[6px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] md:pt-[22px] md:pr-[16px] md:pb-[18px] md:pl-[16px]">
       
          <p className="font-nep font-semibold text-[16px] leading-[24px] md:text-[20.8px] md:leading-[31.2px] text-[#111110] line-clamp-2">
            {lang === "EN" ? newsItem.titleEN : newsItem.titleNE}
          </p>

        
          <p className="font-nep font-normal text-[13px] leading-[22px] md:text-[14px] md:leading-[26.4px] text-[#3D3B38] line-clamp-1">
            {lang === "EN" ? newsItem.descriptionEN : newsItem.descriptionNE}
          </p>
          <div className="flex gap-1 items-center">
            <p className="font-nep font-semibold text-[13px] leading-[21px] md:text-[14.4px] md:leading-[23px] text-[#3D3B38]">
              {lang === "EN" ? newsItem.authorEN : newsItem.authorNE}
            </p>
            <p className="font-nep font-normal text-[13px] leading-[21px] md:text-[14px] md:leading-[22.4px] text-[#7A7470]">
              {lang === "EN" ? newsItem.createdAtEN : newsItem.createdAtNE}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
