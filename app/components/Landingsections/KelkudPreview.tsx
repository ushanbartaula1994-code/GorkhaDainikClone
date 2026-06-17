"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import Card from "./Card";

interface Props {
  category: Category;
}

function KhelkudPreview({ category }: Props) {
  const news = category.news.slice(0, 3);

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/sports"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {news.map((item, index) => (
            <Card key={item.id.EN} newsItem={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KhelkudPreview;
