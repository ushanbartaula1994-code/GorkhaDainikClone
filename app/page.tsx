import GorkhaPreview from "./components/Landingsections/GorkhaPreview";
import HeroSection from "./components/heroSection/HeroSection";
import MostRead from "./components/category/MostRead";
import { categories } from "@/app/data/catagory.data";
import { sportsCategory } from "@/app/data/sport.data";
import PradeshPreview from "./components/Landingsections/PardeshPreview";
import NationalPreview from "./components/Landingsections/NationalPreview";
import SportsPreview from "./components/Landingsections/KelkudPreview";
import { economyCategory } from "@/app/data/market.data";
import EconomyPreview from "./components/Landingsections/EconomyPreview";
import { videoCategory } from "@/app/data/video.data";
import VideoPreview from "./components/Landingsections/VideoPreview";
import VideoReelsPreview from "./components/Landingsections/VideoReelPreview";
import OpinionInternationalPreview from "./components/Landingsections/OpinionInternationalPreview";
import EntertainmentPreview from "./components/Landingsections/EntertainmentPreviewCard";
import Newsletter from "./components/newsletter/NewsLetter";

export default function Home() {
  const gorkha = categories.find((item) => item.slug === "gorkha");
  const province = categories.find((item) => item.slug === "province");
  const national = categories.find((item) => item.slug === "national");
  const opinion = categories.find((item) => item.slug === "opinion");
const international = categories.find((item) => item.slug === "international");
const entertainment = categories.find((item) => item.slug === "entertainment");

  if (!gorkha) return null;

  return (
    <main className="bg-[#EDEAE3]">
      <HeroSection />

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <GorkhaPreview category={gorkha} />
            {province && <PradeshPreview category={province} />}
            {national && <NationalPreview category={national} />}
            <SportsPreview category={sportsCategory} />
            <EconomyPreview category={economyCategory} />
            <VideoPreview category={videoCategory} />
          </div>

          <div className="hidden lg:block shrink-0">
            <MostRead news={gorkha.news.slice(0, 5)} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <VideoReelsPreview category={videoCategory} />
            {opinion && international && (
              <div className="bg-white">
                {" "}
                <OpinionInternationalPreview
                  opinion={opinion}
                  international={international}
                />
              </div>
            )}
            {entertainment && <EntertainmentPreview category={entertainment} />}
            <Newsletter />
          </div>

          <div className="hidden lg:block shrink-0 w-[300px]">
            <MostRead
              news={videoCategory.news.slice(0, 5)}
              titleEN="Most Watched"
              titleNE="धेरै हेरिएका"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
