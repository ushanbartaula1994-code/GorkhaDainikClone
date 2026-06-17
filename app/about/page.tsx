import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TitleCard from "@/app/components/category/TitleCard";
import AboutIntro from "../components/aboutus/AboutIntro";
import PublicationInfo from "../components/aboutus/PublicationInfo";
import OurTeam from "../components/aboutus/OurTeam";
import ContactInfo from "../components/aboutus/ContactInfo";

export default function AboutPage() {
  const breadcrumbTextStyle =
    "text-[14.4px] leading-[23px] font-normal text-[#7A7470]";

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

          <p className={breadcrumbTextStyle}>हाम्रो बारेमा</p>
        </div>

        <div className="w-full flex justify-between items-center pb-[6px] border-b-2 border-[#C01C28]">
          <TitleCard
            titleEN="About Us"
            titleNE="हाम्रो बारेमा"
            descriptionNE="गोर्खाको आवाज, नेपालको खबर — २०७५ देखि"
            descriptionEN="Voice of Gorkha, News of Nepal — Since 2018"
            totalNewsEN="2018"
            totalNewsNE="२०७५"
            hideLabel
          />
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex gap-4">
        <div className="flex-1">
          <div className="flex">
            <AboutIntro />
            <PublicationInfo />
          </div>
          <OurTeam />
        </div>
      </div>
      <div className="p-2">
        <ContactInfo />
      </div>
    </section>
  );
}
