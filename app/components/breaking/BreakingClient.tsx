"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FlatArticle } from "@/types/flatArticle.type";
import { useLanguage } from "@/app/context/LanguageContext";
import { searchListVariants, searchCardVariants } from "@/app/animation/card";

interface Props {
  news: FlatArticle[];
}

export default function BreakingClient({ news }: Props) {
  const { lang } = useLanguage();

  return (
    <motion.div
      variants={searchListVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col py-4"
    >
      {news.map((item, index) => {
        const title = lang === "NE" ? item.titleNE : item.titleEN;
        const category =
          lang === "NE" ? item.categoryTitleNE : item.categoryTitleEN;
        const author = lang === "NE" ? item.authorNE : item.authorEN;
        const createdAt = lang === "NE" ? item.createdAtNE : item.createdAtEN;
        const isFirst = index === 0;

        return (
          <motion.div
            key={item.slug}
            variants={searchCardVariants}
            className="border-b border-[#0000001A]"
          >
            <Link
              href={`/news/${item.slug}`}
              className="flex items-start gap-4 py-[18px] group"
            >
              {/* Time */}
              <div className="flex-shrink-0 w-[60px]">
                {isFirst ? (
                  <span className="inline-block px-2 py-[2px] bg-[#C01C28] text-white font-nep font-bold text-[12px] rounded-[4px]">
                    {lang === "NE" ? "अहिले" : "Now"}
                  </span>
                ) : (
                  <span className="font-nep font-normal text-[13px] text-[#7A7470]">
                    {createdAt}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h2 className="font-nep font-semibold text-[16px] md:text-[17.6px] leading-[28px] text-[#111110] group-hover:text-[#C01C28] transition-colors line-clamp-2">
                  {title}
                </h2>
                <div className="flex items-center gap-1 font-nep text-[13px] text-[#7A7470]">
                  <span>{category}</span>
                  {author && (
                    <>
                      <span>·</span>
                      <span>{author}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
