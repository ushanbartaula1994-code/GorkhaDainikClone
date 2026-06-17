"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FlatArticle } from "@/types/flatArticle.type";
import { useLanguage } from "@/app/context/LanguageContext";
import { searchCardVariants, searchArrowVariants } from "@/app/animation/card";

interface Props {
  article: FlatArticle;
  query: string;
}

export default function ResultCard({ article, query }: Props) {
  const { lang } = useLanguage();

  const title = lang === "NE" ? article.titleNE : article.titleEN;
  const description =
    lang === "NE" ? article.descriptionNE : article.descriptionEN;
  const author = lang === "NE" ? article.authorNE : article.authorEN;
  const createdAt = lang === "NE" ? article.createdAtNE : article.createdAtEN;

  return (
    <motion.div
      variants={searchCardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="border-b border-[#0000001A] px-4"
    >
      <Link
        href={`/news/${article.slug}`}
        className="flex gap-4 py-[18px] group"
      >
        <div className="relative flex-shrink-0 w-[156px] h-[97px] rounded-[6px] overflow-hidden bg-gray-100 max-sm:w-[100px] max-sm:h-[65px]">
          <Image
            src={article.image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
          <div className="flex items-start gap-1 group">
            <h2 className="font-nep font-semibold text-[19.2px] leading-[27.84px] underline text-gray-900 max-sm:text-[15px]   group-hover:text-[#C01C28] max-sm:leading-[22px] line-clamp-2">
              {title}
            </h2>

            <motion.span
              variants={searchArrowVariants}
              className="text-[#C01C28] text-[18px] mt-1 flex-shrink-0"
            >
              →
            </motion.span>
          </div>

          <p
            className="font-nep font-normal text-[16px] leading-[25.6px] text-[#3D3B38]
                        max-sm:text-[13px] max-sm:leading-[20px] line-clamp-2 mb-1"
          >
            {description}
          </p>

          <div className="flex items-center gap-1 text-[13px] text-gray-400 font-nep mt-1">
            <span>{author}</span>
            <span>·</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
