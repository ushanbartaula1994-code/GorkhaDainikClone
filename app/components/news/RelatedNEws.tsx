"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Category } from "@/types/catagory.type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  parentCategory: Category;
  slug: string;
}

function RelatedNews({ parentCategory, slug }: Props) {
  const { lang } = useLanguage();

  const relatedNews = parentCategory.news.filter((item) => item.slug !== slug);

  return (
    <div className="w-full flex flex-col bg-[#EDEAE3] gap-4 mt-6">
      <div className="flex items-center gap-2 ">
        <span className="w-1 h-4 rounded-full bg-[#C01C28]" />
        <p className=" w-full font-nep font-extrabold ] text-[18px] text-[#111110]">
          {lang === "NE" ? "सम्बन्धित समाचार" : "Related News"}
        </p>
      </div>

      <span className="block w-full border-2 rounded border-black" />

      <div className="related-scroll grid grid-flow-col auto-cols-[calc(50%-8px)] gap-4 overflow-x-auto pb-3  bg-white">
        {relatedNews.map((item) => (
          <Link href={`/news/${item.slug}`} key={item.slug}>
            <div className="flex flex-col cursor-pointer rounded-[8px] border border-[#0000001A] overflow-hidden hover:shadow-md transition-shadow duration-200 w-full h-[298px]">
              <div className="relative w-full h-[70%] shrink-0">
                <Image
                  src={item.image}
                  alt={lang === "EN" ? item.titleEN : item.titleNE}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 px-3 py-2 md:px-4 md:py-3 bg-white ">
                <p
                  className="font-nep font-semibold text-[16px] sm:text-[17px] lg:text-[18.4px] leading-[24px] sm:leading-[26px] lg:leading-[27.6px] tracking-normal
                 text-[#111110] text-[#111110] line-clamp-2"
                >
                  {lang === "EN" ? item.titleEN : item.titleNE}
                </p>
                <p className="font-mono font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22.4px] text-[#7A7470]">
                  {lang === "EN" ? item.createdAtEN : item.createdAtNE}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedNews;
