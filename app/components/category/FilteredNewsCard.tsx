"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { filteredCardVariants,filteredImageVariants} from "@/app/animation/card";
  import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  item: {
    id: { EN: string };
    titleEN: string;
    titleNE: string;
    image: string | null;
    slug: string;
    createdAtNE: string;
    createdAtEN: string;
  };
}

export default function FilteredNewsCard({ item }: Props) {
    const {lang}=useLanguage()
    
  return (
    <Link href={`/news/${item.slug}`}>
      <motion.div
        variants={filteredCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        animate="rest"
        whileHover="hover"
        className="w-full min-h-[200px] group  cursor-pointer md:min-h-[298px] lg:min-h-[336px] bg-white border  border-[#0000001A] rounded-[8px] overflow-hidden flex flex-col"
      >
        <div className="w-full h-[70%] bg-[#EDEAE3] relative rounded-t-[8px] overflow-hidden">
          {item.image && item.image.trim() !== "" && (
            <motion.div
              variants={filteredImageVariants}
              className="absolute inset-0"
            >
              <Image
                src={item.image}
                alt={item.titleEN}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
        <div className="w-full  h-[96.61px] pt-[22px] pr-[16px] pb-[18px] pl-[16px] font-nep flex flex-col gap-[6px]">
          <h2 className="font-semibold text-[18.4px] leading-[27.6px] text-[#111110]  group-hover:text-[#C01C28] transition-colors duration-200">
            {lang === "EN" ? item.titleEN : item.titleNE}
          </h2>
          <p className="font-nep text-[14px] leading-[23px] text-[#7A7470]">
            {lang === "EN" ? item.createdAtEN : item.createdAtNE}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
