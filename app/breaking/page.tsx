import { allBreakingNews, breakingCategories } from "@/app/data/breaking.data";
import TitleCard from "@/app/components/category/TitleCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BreakingClient from "@/app/components/breaking/BreakingClient";
import BreakingCategories from "@/app/components/breaking/BreakingCategories";

export default function BreakingPage() {
  const breadcrumbTextStyle =
    "text-[14.4px] leading-[23px] font-normal text-[#7A7470]";

  return (
    <section className="flex flex-col bg-surface">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-5 flex flex-col gap-[8px] md:gap-4">
        <div className="w-full h-[23px] flex items-center gap-[5px]">
          <Link href="/" className={breadcrumbTextStyle}>
            गृहपृष्ठ
          </Link>
          <ChevronRight size={12} className="text-[#C01C28] mb-0.5" />
          <p className={breadcrumbTextStyle}>ब्रेकिङ न्युज</p>
        </div>

        <div className="w-full flex justify-between items-center pb-[6px] border-b-2 border-[#C01C28]">
          <TitleCard
            titleNE="ब्रेकिङ न्युज"
            titleEN="Breaking News"
            descriptionNE="मिनेटमिनेटमा अपडेट हुने ताजा समाचार"
            descriptionEN="Latest news updated every minute"
            totalNewsNE={`${allBreakingNews.length}+`}
            totalNewsEN={`${allBreakingNews.length}+`}
            showLive={true}
          />
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex gap-6">
        <div className="flex-1 min-w-0">
          <BreakingClient news={allBreakingNews.slice(0,10)} />
        </div>

        
       
            <BreakingCategories categories={breakingCategories} />
          </div>
    
    </section>
  );
}
