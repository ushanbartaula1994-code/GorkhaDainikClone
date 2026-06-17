import { categories } from "@/app/data/catagory.data";
import { BreakingCategory } from "@/types/type.breaking";
import { flattenCategories } from "@/app/lib/search.utils";

// सबै categories बाट news flatten गर्छ
export const allBreakingNews = flattenCategories(categories);

export const breakingCategories: BreakingCategory[] = [
  {
    slug: "politics",
    labelNE: "राजनीति",
    labelEN: "Politics",
      href: "/category/gorkha?category=politics",
  },
  {
    slug: "economy",
    labelNE: "अर्थ/बजार",
    labelEN: "Economy/Market",
    href: "/economy",
  },
  { slug: "sports", labelNE: "खेलकुद", labelEN: "Sports", href: "/sports" },
  {
    slug: "international",
    labelNE: "अन्तर्राष्ट्रिय",
    labelEN: "International",
    href: "/category/international",
  },
];
