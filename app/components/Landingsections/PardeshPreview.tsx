"use client";

import { useState } from "react";
import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import LandingFeatureCard from "@/app/components/Landingsections/LandingFeatureCard";
import LandingNews from "@/app/components/Landingsections/LandingNews";
import FilterCard from "@/app/components/category/FilterCard";

interface Props {
  category: Category;
}

function PradeshPreview({ category }: Props) {
  const [activePrimary, setActivePrimary] = useState("all");
  const [activeSecondary, setActiveSecondary] = useState("all");

  const filteredNews = category.news.filter((item) => {
    const primaryMatch =
      activePrimary === "all" ||
      item.category?.trim().toLowerCase() === activePrimary.toLowerCase();

    const secondaryMatch =
      activeSecondary === "all" ||
      item.region?.trim().toLowerCase() === activeSecondary.toLowerCase();

    return primaryMatch && secondaryMatch;
  });

  const featuredNews = filteredNews[0];
  const listNews = filteredNews.slice(1, 5);

  return (
    <div className="flex flex-col md:flex-row flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/province"
        />

        <FilterCard
          category={category}
          activePrimary={activePrimary}
          activeSecondary={activeSecondary}
          onPrimaryChange={setActivePrimary}
          onSecondaryChange={setActiveSecondary}
        />

        {filteredNews.length === 0 ? (
          <p className="font-nep text-[#7A7470] text-[14px] px-2">
            कुनै समाचार फेला परेन।
          </p>
        ) : (
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
             <div className="w-full md:w-auto md:shrink-0">
            {featuredNews && <LandingFeatureCard newsItem={featuredNews} />}
            </div>
            <div className="flex flex-col flex-1 w-full min-w-0">
              <LandingNews news={listNews} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PradeshPreview;
