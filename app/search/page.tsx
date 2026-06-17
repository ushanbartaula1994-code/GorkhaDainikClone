import { categories } from "@/app/data/catagory.data";
import { flattenCategories } from "@/app/lib/search.utils";
import SearchClient from "@/app/components/search/SearchClient";
import { sportsCategory } from "@/app/data/sport.data";

export default function Page() {
 const allArticle = flattenCategories([...categories, sportsCategory]);
 
  return (
    <div className="bg-[#EDEAE3]">
      <SearchClient allArticle={allArticle} />
    </div>
  );
}
