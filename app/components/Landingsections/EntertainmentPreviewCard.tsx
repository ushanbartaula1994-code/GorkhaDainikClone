"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import EconomyCard from "@/app/components/Landingsections/EconomyCard";

interface Props {
  category: Category;
}

function EntertainmentPreview({ category }: Props) {
  const featuredNews = category.news[0];
  const sideNews = category.news.slice(1, 3);

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/entertainment"
        />

        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          <div className="w-full md:w-[40%] shrink-0">
            <EconomyCard newsItem={featuredNews} index={0} />
          </div>

          
          <div className="flex flex-col md:flex-row gap-3 flex-1 w-full min-w-0">
            {sideNews.map((item, index) => (
              <div key={item.id.EN} className="flex-1 min-w-0">
                <EconomyCard newsItem={item} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentPreview;
