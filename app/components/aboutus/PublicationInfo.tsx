"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

const INFO_NE = [
  { label: "प्रकाशक", value: "रमा सिम्खडा" },
  { label: "सम्पादक", value: "रमा सिम्खडा" },
  { label: "स्थापना", value: "२०७५" },
  { label: "भाषा", value: "नेपाली" },
];

const INFO_EN = [
  { label: "Publisher", value: "Rama Simkhada" },
  { label: "Editor", value: "Rama Simkhada" },
  { label: "Established", value: "2018" },
  { label: "Language", value: "Nepali" },
];

export default function PublicationInfo() {
  const { lang } = useLanguage();

  const info = lang === "EN" ? INFO_EN : INFO_NE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex flex-col gap-[10px] w-full max-w-[540px]"
    >
      <h2 className="font-nep font-bold text-[15px] md:text-[16px] leading-[25.6px] text-[#7A7470]">
        {lang === "EN" ? "Publication Info" : "प्रकाशन जानकारी"}
      </h2>
      <div className="flex flex-col bg-white">
        {info.map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center
                       px-3 md:px-[18px] py-[14px]
                       border-b border-[#0000001A]"
          >
            <span className="font-nep font-normal text-[13px] md:text-[16px] leading-[25.6px] text-[#7A7470]">
              {item.label}
            </span>
            <span className="font-nep font-normal text-[13px] md:text-[16px] leading-[25.6px] text-[#111110]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
