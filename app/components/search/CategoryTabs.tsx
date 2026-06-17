"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

const TABS = [
  { slug: "all", labelNE: "सबै", labelEN: "All" },
  { slug: "samachar", labelNE: "समाचार", labelEN: "News" },
  { slug: "video", labelNE: "भिडियो", labelEN: "Video" },
  { slug: "opinion", labelNE: "विचार", labelEN: "Opinion" },
];

interface Props {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: Props) {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-[#EDEAE3]">
      {TABS.map((tab) => {
        const isActive = activeCategory === tab.slug;
        return (
          <motion.button
            key={tab.slug}
            onClick={() => onCategoryChange(tab.slug)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15 }}
            className={`font-nep font-semibold text-[14.4px] leading-none cursor-pointer h-[37px] flex items-center justify-center pt-1 px-3 whitespace-nowrap rounded-[6px] border ${
              isActive
                ? "bg-[#C01C28] text-white border-[#C01C28]"
                : "bg-surface text-[#7A7470] border-[#C8C1BC] hover:bg-[#F0ECE8] hover:text-black"
            }`}
          >
            {lang === "EN" ? tab.labelEN : tab.labelNE}
          </motion.button>
        );
      })}
    </div>
  );
}
