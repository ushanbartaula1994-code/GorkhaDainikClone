"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import LandingNews from "./LandingNews";

interface Props {
  category: Category;
}

function InternationalPreview({ category }: Props) {
 

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[white]  p-3">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <LandingTitleCard
          titleEN={category.titleEN}
          titleNE={category.titleNE}
          href="/category/international"
        />
        <LandingNews news={category.news.slice(1, 5)} />
      </div>
    </div>
  );
}

export default InternationalPreview;
