"use client";

import { MarketIndicator } from "@/types/market.type";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  indicators: MarketIndicator[];
}

export default function MarketIndicators({ indicators }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="font-nep font-semibold text-[16px] text-[#3D3B38]">
        {lang === "NE" ? "बजार सूचकांक" : "Market Indicators"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {indicators.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="flex flex-col gap-1 bg-white border border-[#E8E4E0] rounded-[8px] px-4 py-3"
          >
            <p className="font-nep font-normal text-[13px] text-[#7A7470]">
              {lang === "NE" ? item.labelNE : item.labelEN}
            </p>

            <p className="font-nep font-bold text-[18px] text-[#1A1A1A]">
              {item.value}
            </p>

            <div
              className={`flex items-center gap-1 text-[13px] font-nep font-semibold ${
                item.isPositive ? "text-[#16A34A]" : "text-[#C01C28]"
              }`}
            >
              {item.isPositive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span>{lang === "NE" ? item.changeNE : item.changeEN}</span>
              <span>
                ({lang === "NE" ? item.changePercentNE : item.changePercentEN})
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
