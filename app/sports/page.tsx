import { sportsCategory } from "@/app/data/sport.data";
import TitleCard from "@/app/components/category/TitleCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MostRead from "../components/category/MostRead";
import CategoryClient from "@/app/components/category/categoryClient";

export default function SportsPage() {
  const breadcrumbTextStyle =
    "text-[14.4px] leading-[23px] font-normal text-[#7A7470]";
  const category = sportsCategory;

  return (
    <section className="flex flex-col bg-surface">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-5 flex flex-col gap-[8px] md:gap-4 opacity-100">
        {/* Breadcrumb */}
        <div className="w-full h-[23px] flex items-center gap-[5px]">
          <Link href="/" className={breadcrumbTextStyle}>
            गृहपृष्ठ
          </Link>
          <span className="flex items-center">
            <ChevronRight size={12} className="text-[#C01C28] mb-0.5" />
          </span>
          <p className={breadcrumbTextStyle}>{category.titleNE}</p>
        </div>

        {/* Title */}
        <div className="w-full flex justify-between items-center pb-[6px] border-b-2 border-[#C01C28]">
          <TitleCard
            titleNE={sportsCategory.titleNE}
            titleEN={sportsCategory.titleEN}
            descriptionNE={sportsCategory.descriptionNE}
            descriptionEN={sportsCategory.descriptionEN}
            totalNewsNE={sportsCategory.totalNewsNE}
            totalNewsEN={sportsCategory.totalNewsEN}
          />
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex gap-6">
        {/* Left — News */}
        <div className="flex-1 min-w-0">
          <CategoryClient category={sportsCategory} showFeatured={false} />
        </div>

        <div className="hidden lg:block w-[300px] flex-shrink-0">
          <div className="sticky top-4">
            <MostRead news={category.news.slice(0, 5)} />
          </div>
        </div>
      </div>
    </section>
  );
}
