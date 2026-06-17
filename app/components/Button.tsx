"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Button() {
  const { lang } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-[92px] h-[35px] px-[14px] py-[5px] rounded-[4px]
      border border-[#C01C28] bg-white text-[#C01C28] flex items-center justify-center text-[14px] leading-[100%] font-semibold hover:bg-[#C01C28] hover:text-white transition-colors group"
    >
      <p className="flex whitespace-nowrap gap-1 mt-0.5 cursor-pointer items-center">
        {lang === "EN" ? "View All" : "सबै हेर्नुस"}
        <motion.span
          animate={{ x: 0 }}
          whileHover={{ x: 2 }}
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <ArrowRight size={16} />
        </motion.span>
      </p>
    </motion.button>
  );
}

export default Button;
