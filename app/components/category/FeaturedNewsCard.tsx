"use client";

import { Category } from "@/types/catagory.type";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  featuredCardVariants,
  imageVariants,
  textVariants,
} from "@/app/animation/card";
import { ArrowRight } from "lucide-react"
import Link from "next/link";

interface Props {
  newsItem: Category["news"][number];
}

export default function FeaturedNewsCard({ newsItem }: Props) {
  const { lang } = useLanguage();

  const title = lang === "EN" ? newsItem.titleEN : newsItem.titleNE;
  const description =
    lang === "EN" ? newsItem.descriptionEN : newsItem.descriptionNE;
  const author = lang === "EN" ? newsItem.authorEN : newsItem.authorNE;
  const createdAt = lang === "EN" ? newsItem.createdAtEN : newsItem.createdAtNE;

  return (
    <Link href={`/news/${newsItem.slug}`}>
      <motion.div
        variants={featuredCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover="hover"
        animate="rest"
        className="w-full md:min-h-[304px] bg-white border cursor-pointer border-black/10 rounded-[10px]"
      >
        <div className="w-full h-full flex flex-row p-3">
          <div className="w-[48%] relative min-h-[160px] md:h-[280px] bg-[#EDEAE3] rounded-l-[10px] overflow-hidden flex-shrink-0">
            <motion.div variants={imageVariants} className="absolute inset-0">
              <Image
                src={newsItem.image || "/gorkhasamachar/preview.png"}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 800px"
              />
            </motion.div>
          </div>

          <div className="w-[52%] flex flex-col items-start gap-2 md:gap-3 px-3 py-2 md:px-[26px] md:pt-[52px] md:pb-[52px]">
            {title && (
              <motion.h2
                variants={textVariants}
                className="font-semibold text-[14px] md:text-[25px] leading-tight md:leading-[31.36px] text-[#111110] line-clamp-3"
              >
                {title}
              </motion.h2>
            )}

            {description && (
              <motion.p
                variants={textVariants}
                className="hidden md:block font-normal text-[16.8px] leading-[28.56px] text-[#3D3B38]"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              variants={textVariants}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3"
            >
              {author && (
                <p className="font-semibold text-[11px] md:text-[14.4px] leading-[23px] text-[#7A7470]">
                  {author}
                </p>
              )}
              {createdAt && (
                <p className="font-normal text-[11px] md:text-[14.4px] leading-[23px] text-[#7A7470]">
                  {createdAt}
                </p>
              )}
            </motion.div>

            <button className="flex items-center group gap-1 font-nep font-semibold text-[13px] md:text-[15.2px] leading-[24.32px] tracking-normal text-[#C01C28]">
              {lang === "EN" ? "Read Article" : "पढ्नुहोस्"}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-4"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
