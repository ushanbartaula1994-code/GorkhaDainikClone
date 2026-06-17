"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

export default function TitleCard({
  titleEN,
  titleNE,
  descriptionNE,
  descriptionEN,
  totalNewsEN,
  totalNewsNE,
  hideLabel,
  showLive
}: {
  titleEN: string;
  titleNE: string;
  descriptionNE: string;
  descriptionEN: string;
  totalNewsEN: string;
  totalNewsNE: string;
  hideLabel?: boolean;
  showLive?: boolean;
}) {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex justify-between items-start pb-[6px] md:pb-6 ">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <motion.span
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-[3px] self-stretch bg-[#C01C28] rounded-full"
          />
          <span className="w-[3px] self-stretch bg-[#C01C28] rounded-full" />
          <p className="text-[24px] flex items-center gap-3 leading-[28.8px] md:text-[32px] md:leading-[38.4px] font-semibold text-[#111110]">
            {lang === "EN" ? titleEN : titleNE}
            {showLive && (
              <span className="inline-flex px-2 py-1.5 items-center gap-1 bg-red-600 text-white text-[10px] leading-none  rounded font-semibold whitespace-nowrap">
                <span className="w-1 h-1 mb-0.5 rounded-full bg-white animate-dot-glow" />
                LIVE
              </span>
            )}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[16.8px] leading-[26.88px] font-normal text-[#7A7470] pl-[11px] mt-1"
        >
          {lang === "EN" ? descriptionEN : descriptionNE}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="hidden md:flex flex-col items-center justify-center"
      >
        <span className="text-[28px] leading-[44.8px] font-bold text-[#C01C28]">
          {lang === "EN" ? totalNewsEN : totalNewsNE}
        </span>
        {!hideLabel && (
          <span className="text-[12px] text-[#7A7470] font-normal">
            {lang === "EN" ? "articles" : "समाचार"}
          </span>
        )}
      </motion.div>
    </div>
  );
}
