"use client";

import type { Category } from "@/types/catagory.type";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";

interface Props {
  category: Category;
}

function OpinionPreview({ category }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[white] pb-6 p-3 ">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/opinion"
        />

        <div className="flex flex-col divide-y divide-black/10 bg-white">
          {category.news.slice(1, 5).map((item, index) => (
            <Link href={`/news/${item.slug}`} key={item.id.EN}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                whileHover={{ x: 4, backgroundColor: "#E0DDD6" }}
                className="flex items-start  gap-3 py-4 px-2 cursor-pointer transition-colors rounded"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#cec7b5] flex items-center justify-center">
                  <span className=" font-nep text-[#7A7470]  leading-[19px] text-center md:text-[12.5px] md:leading-[20px]  font-bold text-[13px]">
                    {item.authorInitials}
                  </span>
                </div>

                <div className="flex flex-col gap-[4px]">
                  <p className="font-nep text-[14px] leading-[22px] font-bold text-[#111110] md:text-[14.4px] md:leading-[23px]">
                    {lang === "EN" ? item.authorEN : item.authorNE}
                  </p>

                  <p className="font-nep text-[16px] leading-[24px] font-semibold text-[#111110] md:text-[17.6px] md:leading-[26.4px] line-clamp-2">
                    {lang === "EN" ? item.titleEN : item.titleNE}
                  </p>

                  <p className="font-nep font-normal text-[12.2px] leading-[19.46px] text-[#7A7470]">
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

export default OpinionPreview;
