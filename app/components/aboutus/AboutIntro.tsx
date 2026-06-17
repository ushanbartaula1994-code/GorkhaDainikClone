"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutIntro() {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-[13px] w-full max-w-[660px]"
    >
     
      <h2 className="font-nep font-bold text-[16px] md:text-[18px] leading-[25px] md:leading-[28.8px] text-[#111110]">
        {lang === "EN" ? "About Gorkha Daily" : "गोर्खा दैनिकको परिचय"}
      </h2>

      
      <div className="flex flex-col gap-[13px]">
        <p className="font-nep font-normal text-[14.4px] md:text-[16.8px] leading-[26px] md:leading-[31px] text-[#3D3B38]">
          {lang === "EN"
            ? "Gorkha Daily is a leading online newspaper published from Gorkha district of Nepal."
            : "गोर्खा दैनिक नेपालको गोरखा जिल्लाबाट प्रकाशित एक अग्रणी अनलाइन समाचार पत्र हो।"}
        </p>
        <p className="font-nep font-normal text-[14.4px] md:text-[16.8px] leading-[26px] md:leading-[31px] text-[#3D3B38]">
          {lang === "EN"
            ? "Established in 2018, this newspaper has been working with the aim of bringing the voice of Gorkha to the national platform."
            : "२०७५ सालमा स्थापित यो पत्रिकाले गोरखाको आवाजलाई राष्ट्रिय पटलमा पुर्‍याउने उद्देश्यले काम गर्दै आएको छ।"}
        </p>
        <p className="font-nep font-normal text-[14.4px] md:text-[16.8px] leading-[26px] md:leading-[31px] text-[#3D3B38]">
          {lang === "EN"
            ? "Our goal is to serve Nepali society through impartial, factual and people-oriented journalism."
            : "हाम्रो लक्ष्य निष्पक्ष, तथ्यपरक र जनमुखी पत्रकारिताको माध्यमबाट नेपाली समाजको सेवा गर्नु हो।"}
        </p>
      </div>
    </motion.div>
  );
}
