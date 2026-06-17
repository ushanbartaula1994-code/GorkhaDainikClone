"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import LandingFeatureCard from "@/app/components/Landingsections/LandingFeatureCard";
import LandingNews from "@/app/components/Landingsections/LandingNews";

interface Props {
  category: Category;
}

function NationalPreview({ category }: Props) {
  const featuredNews = category?.news?.[0];

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/national"
        />

        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          <div className="w-full md:w-auto md:shrink-0">
            <LandingFeatureCard newsItem={featuredNews} />
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <LandingNews news={category.news.slice(1, 5)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NationalPreview;
