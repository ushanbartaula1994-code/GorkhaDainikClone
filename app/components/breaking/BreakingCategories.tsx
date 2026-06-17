"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { BreakingCategory } from "@/types/type.breaking";

interface Props {
  categories: BreakingCategory[];
}

export default function BreakingCategories({ categories }: Props) {
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
        {lang === "EN" ? "Search by Topic" : "विषयगत खोज"}
      </h2>

      <div>
        {categories.map((cat, index) => (
          <Link href={cat.href} key={cat.slug}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              whileHover={{ x: 4, backgroundColor: "#EDEAE3" }}
              className="w-full cursor-pointer flex items-center justify-between px-[18px] py-[13px] border-b border-[#0000001A] transition-colors duration-200"
            >
              <span className="font-nep font-semibold text-[15px] leading-[23.2px] text-[#111110]">
                {lang === "EN" ? cat.labelEN : cat.labelNE}
              </span>
              <ChevronRight size={16} className="text-[#7A7470]" />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
