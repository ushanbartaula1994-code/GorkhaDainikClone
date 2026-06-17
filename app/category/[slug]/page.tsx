
import { categories } from "@/app/data/catagory.data";
 import { notFound } from "next/navigation";
 import { ChevronRight } from "lucide-react";
import TitleCard from "@/app/components/category/TitleCard";
import CategoryClient from "@/app/components/category/categoryClient";
import MostRead from "@/app/components/category/MostRead";
import Link from "next/link";
 
interface Props {
  params: Promise<{
    slug: string;
  }>;
}export default async function CategoryPage({ params }: Props) {

  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return notFound();
  }
  
   const breadcrumbTextStyle = "text-[14.4px] leading-[23px] font-normal text-[#7A7470]";
   

  return (
    <section className="flex flex-col bg-surface">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-5 flex flex-col gap-[8px] md:gap-4 opacity-100  ">
        <div className="w-full h-[23px] flex items-center gap-[5px]">
          <Link href='/' className={breadcrumbTextStyle}>गृहपृष्ठ</Link>
          <span className="flex items-center">
            <ChevronRight size={12} className="text-[#C01C28] mb-0.5" />
          </span>

          <p className={breadcrumbTextStyle}>{category.titleNE}</p>
        </div>
        <div className="w-full  flex justify-between items-center pb-[6px]  border-b-2 border-[#C01C28]">
          <TitleCard
            titleEN={category.titleEN}
            titleNE={category.titleNE}
            descriptionNE={category.descriptionNE}
            descriptionEN={category.descriptionEN}
            totalNewsEN={category.totalNewsEN}
            totalNewsNE={category.totalNewsNE}
          />
        </div>
      </div>
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex gap-4">
        <div className="flex-1">
          <CategoryClient category={category} />
        </div>
        <MostRead news={category.news.slice(0, 5)} />
      </div>
    </section>
  );
}
