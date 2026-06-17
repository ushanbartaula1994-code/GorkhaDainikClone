"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

function NewsLetter() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6 pt-[22px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-[90px] px-6 sm:px-[40px] py-6 sm:py-[32px] bg-white rounded-[12px]"
        style={{
          borderWidth: "2px 2px 2px 4px",
          borderStyle: "solid",
          borderColor:
            "rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.1) #C01C28",
        }}
      >
        
        <div className="flex flex-col gap-[6px]">
          <h2 className="font-nep font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-[#111110]">
            {lang === "EN"
              ? "Get Gorkha Daily Newsletter"
              : "गोर्खा दैनिकको न्युजलेटर पाउनुहोस्"}
          </h2>
          <p className="font-nep font-normal text-[13px] sm:text-[15.2px] leading-[20px] sm:leading-[22.8px] text-[#7A7470]">
            {lang === "EN"
              ? "Fresh news directly in your email — daily at 6 AM"
              : "ताजा समाचार सिधै आफ्नो इमेलमा — दैनिक बिहान ६ बजे"}
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <input
            type="email"
            placeholder={
              lang === "EN" ? "Your email address" : "तपाईंको इमेल ठेगाना"
            }
            className="w-full bg-[#0000001A] sm:w-full h-[44px] px-[18px] py-[11px] rounded-[6px] border border-black/10 font-nep font-normal text-[15.2px] text-[#7A7470] outline-none focus:border-[#C01C28] transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-[127px] cursor-pointer h-[44px] px-[22px] py-[12px] rounded-[6px] bg-[#C01C28] font-nep font-bold text-[15.2px] text-white whitespace-nowrap"
          >
            {lang === "EN" ? "Subscribe" : "सदस्य बन्नुहोस्"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default NewsLetter;
