import { videoCategory } from "@/app/data/video.data";
import TitleCard from "@/app/components/category/TitleCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import VideoClient from "@/app/components/video/VideoClient";
import MostRead from "@/app/components/category/MostRead";
import type { Category } from "@/types/catagory.type";


export default function VideoPage() {
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
          <p className={breadcrumbTextStyle}>{videoCategory.titleNE}</p>
        </div>

        <div className="w-full flex justify-between items-center pb-[6px] border-b-2 border-[#C01C28]">
          <TitleCard
            titleNE={videoCategory.titleNE}
            titleEN={videoCategory.titleEN}
            descriptionNE={videoCategory.descriptionNE}
            descriptionEN={videoCategory.descriptionEN}
            totalNewsNE={videoCategory.totalNewsNE}
            totalNewsEN={videoCategory.totalNewsEN}
          />
        </div>
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex gap-6">
        <div className="flex-1 min-w-0">
          <VideoClient category={videoCategory} />
        </div>

        <div className="hidden lg:block w-[300px] flex-shrink-0">
          <div className="sticky top-4">
            <MostRead
              news={videoCategory.news.slice(0, 5)}
              titleEN="Most Watched"
              titleNE="धेरै हेरिएका"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
