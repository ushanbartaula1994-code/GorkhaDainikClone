
import MostRead from "@/app/components/category/MostRead";
import Author from "@/app/components/news/Author";
import BreadCrumb from "@/app/components/news/BreadCrumb";
import Content from "@/app/components/news/Content";
import Description from "@/app/components/news/Description";
import KeyPoint from "@/app/components/news/KeyPoint";
import NewsDescp from "@/app/components/news/NewsDescp";
import NewsImage from "@/app/components/news/NewsImage";
import RelatedNews from "@/app/components/news/RelatedNEws";
import Social from "@/app/components/news/Social";
import Tags from "@/app/components/news/Tags";
import Title from "@/app/components/news/Title";
import { categories } from "@/app/data/catagory.data";
import { sportsCategory } from "@/app/data/sport.data";
import { economyCategory } from "@/app/data/market.data";
import { videoCategory } from "@/app/data/video.data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}


 export default async  function Page({params}:Props) {
  const {slug}=await params
   console.log("SLUG FROM URL:", slug);
  let newsItem = null; //declerared emplty newsItems to store news later

let parentCategory = null; //declared empty parentcategory 
const allCategories = [...categories, sportsCategory,videoCategory, economyCategory];

for (const category of allCategories) {
  const found = category.news.find((item) => item.slug === slug);
  if (found) {
    newsItem = found;
    parentCategory = category;
    break;
  }
}const mostReadNews = allCategories
  .flatMap((cat) => cat.news)
  .filter((item) => item.slug !== slug)
  .slice(0, 5);


if (!newsItem || !parentCategory) {
  return notFound();
}
  return (
    <section className=" flex bg-[#EDEAE3]  w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-4 gap-8 lg:justify-between">
      <div className="w-full lg:w-[65%] flex flex-col gap-3">
        <BreadCrumb newsItem={newsItem} parentCategory={parentCategory} />
        <Title titleEN={newsItem.titleEN} titleNE={newsItem.titleNE} />
        <Description
          descriptionEN={newsItem.descriptionEN}
          descriptionNE={newsItem.descriptionNE}
        />
        <Author
          authorEN={newsItem.authorEN}
          authorNE={newsItem.authorNE}
          authorInitials={newsItem.authorInitials}
          createdAtEN={newsItem.createdAtEN}
          createdAtNE={newsItem.createdAtNE}
          readTimeEN={newsItem.readTimeEN}
          readTimeNE={newsItem.readTimeNE}
        />
        <Social />
        <NewsImage
          image={newsItem.image}
          imageDescpEN={newsItem.imageDescpEN}
          imageDescpNE={newsItem.imageDescpNE}
        />
        <Content
          contentEN={newsItem.contentEN}
          contentNE={newsItem.contentNE}
        />
        <NewsDescp newsDescription={newsItem.newsDescription} />
        <KeyPoint
          keyPointsNE={newsItem.keyPointsNE}
          keyPointsEN={newsItem.keyPointsEN}
          keyPoint={newsItem.keyPoint}
        />
        <span className="block w-full border border-black/10 " />
        <Tags
          tags={newsItem.tags}
          authorInitials={newsItem.authorInitials}
          authorBioEN={newsItem.authorBioEN}
          authorBioNE={newsItem.authorBioNE}
          authorEN={newsItem.authorEN}
          authorNE={newsItem.authorNE}
        />
        <RelatedNews parentCategory={parentCategory} slug={slug} />
      </div>
      <div className="">
        <MostRead news={mostReadNews} />
      </div>
    </section>
  );
}

