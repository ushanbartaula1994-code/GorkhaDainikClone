"use client";

import { Category } from "@/types/catagory.type";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";


interface Props {
  category: Category;
  activePrimary: string;
  activeSecondary: string;
  onPrimaryChange: (value: string) => void;
  onSecondaryChange: (value: string) => void;
}

export default function FilterCard({
  category,
  activePrimary,
  activeSecondary,
  onPrimaryChange,
  onSecondaryChange,
}: Props) {
  const { lang } = useLanguage();

  const hasPrimary = (category.filters?.primary?.length ?? 0) > 0;
  const hasSecondary = (category.filters?.secondary?.length ?? 0) > 0;

  if (!hasPrimary && !hasSecondary) {
    return <div className="hidden"></div>;
  }

  const primaryFilters = category.filters?.primary ?? [];
  const secondaryFilters = category.filters?.secondary ?? [];

  return (
    <div className="flex flex-col gap-3">
      
      <div className="flex md:px-7 flex-wrap">
        {secondaryFilters.map((item) => {
          const isActive = activeSecondary === item.value;

          return (
            <button
              key={item.value}
              onClick={() => onSecondaryChange(item.value)}
              className={`w-[53px] font-nep font-semibold text-[16px] leading-none text-center cursor-pointer md:w-[78px] lg:w-[81px] h-[37px] relative
                 ${
                isActive
                  ? "border-[#C01C28] text-[#C01C28]"
                  : "border-[#C8C1BC] text-[#7A7470] hover:text-black"
              }`}
            >
              {lang === "EN" ? item.labelEN : item.labelNE}
               {isActive && (
          <motion.div
            layoutId="secondary-underline"
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C01C28]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />)}
            </button>
          );
        })}
      </div>

     
      <div className="flex gap-2 p-2 flex-wrap">
        {primaryFilters.map((item) => {
          const isActive = activePrimary === item.value;

          return (
            <motion.button
              key={item.value}
              onClick={() => onPrimaryChange(item.value)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className={`font-nep font-semibold text-[14.4px] leading-none text-center cursor-pointer h-[37px] flex items-center justify-center pt-1 px-3 whitespace-nowrap rounded-[6px] border ${
                isActive
                  ? "bg-[#C01C28] text-white border-[#C01C28]"
                  : "bg-surface text-[#7A7470] border-[#C8C1BC] hover:bg-[#F0ECE8] hover:text-black"
              }`}
            >
              {lang === "EN" ? item.labelEN : item.labelNE}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
