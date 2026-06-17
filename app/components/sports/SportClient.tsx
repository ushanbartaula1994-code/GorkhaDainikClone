"use client";

import { useState } from "react";
import { Category } from "@/types/catagory.type";
import FilterCard from "@/app/components/category/FilterCard";
import FilteredNewsCard from "@/app/components/category/FilteredNewsCard";

interface Props {
  category: Category;
}

export default function SportsClient({ category }: Props) {
  const [activePrimary, setActivePrimary] = useState("all");
  const [activeSecondary, setActiveSecondary] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredNews = category.news.filter((item) => {
    const primaryMatch =
      activePrimary === "all" ||
      item.category?.trim().toLowerCase() === activePrimary.toLowerCase();
    const secondaryMatch =
      activeSecondary === "all" ||
      item.region?.trim().toLowerCase() === activeSecondary.toLowerCase();
    return primaryMatch && secondaryMatch;
  });

  const visibleNews = showAll ? filteredNews : filteredNews.slice(0, 4);

  return (
    <div className="flex flex-col gap-4 p-5">
      <FilterCard
        category={category}
        activePrimary={activePrimary}
        activeSecondary={activeSecondary}
        onPrimaryChange={setActivePrimary}
        onSecondaryChange={setActiveSecondary}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleNews.map((item) => (
          <FilteredNewsCard key={item.id.EN} item={item} />
        ))}
      </div>

      {filteredNews.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full md:w-[213px] h-[45px] px-[28px] rounded-[6px] border-2 border-[#C01C28] font-nep font-bold text-[16px] text-[#C01C28] hover:bg-[#C01C28] hover:text-white transition"
          >
            {showAll ? "कम देखाउनुहोस्" : "थप समाचार लोड गर्नुहोस्"}
          </button>
        </div>
      )}
    </div>
  );
}
