"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";

interface Props {
  titleEN: string;
  titleNE: string;
  href: string;
}

function LandingTitleCard({ titleEN, titleNE, href }: Props) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-between items-center p-2 border-b-2 border-black"
    >
      <p className="flex items-center gap-2">
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="block w-1 h-6 rounded bg-[#C01C28]"
        />
        <span className="text-[16px] font-bold text-[#111110] md:text-[18.4px]">
          {lang === "EN" ? titleEN : titleNE}
        </span>
      </p>

      <Link href={href}>
        <Button />
      </Link>
    </motion.div>
  );
}

export default LandingTitleCard;
