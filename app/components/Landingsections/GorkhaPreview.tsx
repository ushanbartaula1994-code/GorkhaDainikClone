"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import LandingFeatureCard from "./LandingFeatureCard";
import LandingNews from "./LandingNews";

interface Props {
  category: Category;
}

function GorkhaPreview({ category }: Props) {
  const featuredNews = category?.news?.[0];

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/gorkha"
        />

        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          {/* Feature card — full width on mobile, auto on desktop */}
          <div className="w-full md:w-auto md:shrink-0">
            <LandingFeatureCard newsItem={featuredNews} />
          </div>

          {/* News list — full width on mobile, fills rest on desktop */}
          <div className="flex flex-col flex-1 min-w-0">
            <LandingNews news={category.news.slice(1, 5)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GorkhaPreview;
