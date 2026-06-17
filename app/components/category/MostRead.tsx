"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { Category } from "@/types/catagory.type";
import Link from "next/link";

interface Props {
  news: Category["news"];
  titleEN?: string;
  titleNE?: string;
}


function MostRead({
  news,
  titleEN = "Most Read",
  titleNE = "धेरै पढिएका",
}: Props) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:block w-[300px] bg-white border border-[#0000001A] rounded-[8px] lg:sticky lg:top-[110px] self-start mb-5"
    >
      <h2 className="flex items-center px-3 py-3 gap-2 bg-[#111110] text-white font-nep font-extrabold text-[16px] leading-[25.6px] rounded-t-[8px]">
        <span className="w-[3px] h-4 bg-[#C01C28] rounded-full" />
        {lang === "NE" ? titleNE : titleEN}
      </h2>

      <div>
        {news.map((item, index) => (
          <Link href={`/news/${item.slug}`} key={item.id.EN}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              whileHover={{ x: 4, backgroundColor: "#EDEAE3" }}
              className="w-full min-h-[77px] cursor-pointer flex gap-3 px-[18px] py-[13px] border-b border-[#0000001A] transition-colors duration-200"
            >
              <span className="w-[22px] shrink-0 font-mono font-bold text-[14px] mt-1 leading-[22.4px] text-[#C01C28] ">
                {lang === "EN" ? item.id.EN : item.id.NE}
              </span>

              <div className="flex flex-col gap-[6px]">
                <p className="font-nep font-semibold text-[15px] leading-[23.2px] text-[#111110] line-clamp-2 group-hover:text-[#C01C28]">
                  {lang === "EN" ? item.titleEN : item.titleNE}
                </p>
                <p className="font-mono font-normal text-[13px] leading-[22.4px] text-[#7A7470]">
                  {lang === "EN" ? item.createdAtEN : item.createdAtNE}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default MostRead;
