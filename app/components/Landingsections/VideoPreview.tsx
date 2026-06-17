"use client";

import type { Category } from "@/types/catagory.type";
import LandingTitleCard from "@/app/components/Landingsections/LandingTitleCard";
import EconomyCard from "./EconomyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import VideoPreviewCard from "./VideoPreviewCard";

interface Props {
  category: Category;
}

function VideoPreview({ category }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-[#EDEAE3] pb-6">
      <div className="flex flex-col gap-[22px] pt-[22px]">
        <div className="flex items-center justify-between">
          <LandingTitleCard
            titleEN={category.titleEN}
            titleNE={category.titleNE}
            href="/video"
          />
          <div className="flex gap-2 pr-2">
            <button
              ref={prevRef}
              className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full border border-[#C01C28] text-[#C01C28] hover:bg-[#C01C28] hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 cursor-pointer
               flex items-center justify-center rounded-full border border-[#C01C28] text-[#C01C28] hover:bg-[#C01C28] hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation as NavigationOptions;
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
          }}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full  [&_.swiper-wrapper]:items-stretch"
        >
          {category.news.map((item, index) => (
            <SwiperSlide key={item.id.EN} className="h-auto">
              <VideoPreviewCard newsItem={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoPreview;