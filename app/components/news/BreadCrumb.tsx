"use client"

import { useLanguage } from "@/app/context/LanguageContext";
import { Category } from "@/types/catagory.type";
 import { ChevronRight } from "lucide-react";
import Link from "next/link";
interface Props{
    newsItem:Category["news"][number]
    parentCategory:Category
}

 export default function BreadCrumb({newsItem,parentCategory}:Props) {
    const breadCrumbStyle="font-nep font-normal text-[14.4px] leading-[23px] tracking-normal align-middle text-[#7A7470]"
    const {lang}=useLanguage()

   return (
     <div className="w-full h-[23px] flex items-center gap-[5px]">
       <Link href="/"  className={breadCrumbStyle}>
         {lang === "NE" ? "गृहपृष्ठ" : "Home"}
       </Link>
       <span className="flex items-center">
         <ChevronRight size={12} className="text-[#C01C28] mb-0.5" />
       </span>
       <Link href={`/category/${parentCategory.slug}`} className={breadCrumbStyle}>
         {lang==="EN"? parentCategory.titleEN :parentCategory.titleNE}
       </Link>
       <span className="flex items-center">
         <ChevronRight size={12} className="text-[#C01C28] mb-0.5" />
       </span>
       <p className={breadCrumbStyle}>{lang === "EN" ? "news" : "समाचार"}</p>
     </div>
   );
 }


