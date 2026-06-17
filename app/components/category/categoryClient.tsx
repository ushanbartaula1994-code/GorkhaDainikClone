"use client";

import { Category } from "@/types/catagory.type";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {  useState } from "react";
import FilterCard from "./FilterCard";
import FilteredNewsCard from "./FilteredNewsCard";
import FeaturedNewsCard from "./FeaturedNewsCard";
import { useLanguage } from "@/app/context/LanguageContext";
interface Props {
  category: Category;
  showFeatured?: boolean;
}

export default function CategoryClient({ category,showFeatured }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const {lang}=useLanguage()
  const activePrimary = searchParams.get("category") || "all";
  const [activeSecondary, setActiveSecondary] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const showFeaturedCard = showFeatured ?? true;
  const onPrimaryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }
  const baseNews = category.news.filter((item) => {
  const primaryMatch =
    activePrimary === "all" ||
    item.category?.trim().toLowerCase() === activePrimary.toLowerCase();

  const secondaryMatch =
    activeSecondary === "all" ||
    item.region?.trim().toLowerCase() === activeSecondary.toLowerCase();

  return primaryMatch && secondaryMatch;
});

  const featuredNews =
    showFeaturedCard && baseNews.length > 0 ? baseNews[0] : null;
const finalNews =
  featuredNews && baseNews.length > 0
    ? baseNews.filter((item) => item.id.EN !== featuredNews.id.EN)
    : baseNews;
  const visibleNews =  finalNews.length > 4    ? showAll ? finalNews   : finalNews.slice(0, 4) : finalNews;


 

  return (
    <div className="p-5 md:pb-7 flex flex-col  gap-4">
      <FilterCard
        category={category}
        activePrimary={activePrimary}
        activeSecondary={activeSecondary}
        onPrimaryChange={onPrimaryChange}
        onSecondaryChange={setActiveSecondary}
      />

      {showFeaturedCard && featuredNews && (
        <FeaturedNewsCard newsItem={featuredNews} />
      )}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleNews.map((item) => (
          <FilteredNewsCard key={item.id.EN} item={item} />
        ))}
      </div>

      {finalNews.length > 4 && (
        <div className="flex justify-center md:mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full  md:w-[213px] h-[45px] px-[28px] py-[11px] rounded-[6px] border-2 border-[#C01C28] font-nep font-bold text-[16px] leading-none tracking-normal text-center align-middle cursor-pointer text-[#C01C28] hover:bg-[#C01C28] hover:text-white transition whitespace-nowrap"
          >
            {showAll
              ? lang === "EN"
                ? "Show Less"
                : "कम देखाउनुहोस्"
              : lang === "EN"
                ? "Show More"
                : "थप समाचार लोड गर्नुहोस्"}
          </button>
        </div>
      )}
    </div>
  );
}
