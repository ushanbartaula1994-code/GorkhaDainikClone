"use client";

import type { Category } from "@/types/catagory.type";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

interface Props {
  news: Category["news"];
}

export default function LandingNews({ news }: Props) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-between divide-y divide-black/10 h-full w-full md:w-[280px] lg:w-[320px] overflow-hidden"
    >
      {news.map((item, index) => (
        <Link href={`/news/${item.slug}`} key={item.id.EN}>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            whileHover={{ x: 4, backgroundColor: "#EDEAE3" }}
            className="flex flex-row gap-2 md:gap-3 py-2 md:py-3 px-1 transition-colors duration-200 cursor-pointer"
          >
            <div className="relative w-[72px] h-[54px] md:w-[90px] md:h-[68px] lg:w-[100px] lg:h-[75px] flex-shrink-0">
              <Image
                src={item.image || "/gorkhasamachar/preview.png"}
                alt={item.titleEN}
                fill
                className="object-cover rounded-[6px]"
              />
            </div>
            <div className="flex flex-col justify-between min-h-[54px] md:min-h-[68px] lg:min-h-[75px]">
              <p className="font-nep text-[16px] leading-[24px] font-semibold md:text-[16.8px] md:leading-[25.2px] text-[#111110] line-clamp-2">
                {lang === "EN" ? item.titleEN : item.titleNE}
              </p>
              <p className="font-nep text-[14px] leading-[22px] font-normal text-[#7A7470] md:leading-[22.4px]">
                {lang === "EN" ? item.createdAtEN : item.createdAtNE}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
