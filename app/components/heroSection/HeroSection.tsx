import MainHeroCard from "./MainHeroCard";
import { heroNews,sideNews } from "@/app/data/hero.data";
import SideHeroCard from "./SideHeroCard"

const HeroSection = () => {
  return (
    <section className="w-full bg-black/10 p-2 lg:p-5 bg-[#EDEAE3]">
      <div className="max-w-[1200px]   mx-auto">
        <div className="w-full  md:min-h-[630px]  border border-black/20 border-t-black/20 rounded-[8px] lg:rounded-[10px] overflow-hidden">
          <div className="flex flex-col lg:flex-row bg-[#EDEAE3] gap-2 md:gap-0 h-full cursor-pointer">
            <div className="w-full lg:w-[70%] ">
              <MainHeroCard news={heroNews?.[0]} />
            </div>

            <div className="w-full lg:w-[30%] flex flex-col md:flex-row lg:flex-col gap-1 md:gap-0">
              {sideNews.map((news) => (
                <SideHeroCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;