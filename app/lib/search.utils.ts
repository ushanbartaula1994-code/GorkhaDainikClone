import { Category } from "@/types/catagory.type";
import { FlatArticle } from "@/types/flatArticle.type";

export function flattenCategories(categories: Category[]): FlatArticle[] {
  return categories.flatMap((cat) =>
    cat.news.map((item) => ({
      slug: item.slug,
      categorySlug: cat.slug,
      categoryTitleNE: cat.titleNE,
      categoryTitleEN: cat.titleEN,
      titleNE: item.titleNE,
      titleEN: item.titleEN,
      descriptionNE: item.descriptionNE,
      descriptionEN: item.descriptionEN,
      authorNE: item.authorNE,
      authorEN: item.authorEN,
      authorInitials: item.authorInitials,
      createdAtNE: item.createdAtNE,
      createdAtEN: item.createdAtEN,
      readTimeNE: item.readTimeNE,
      readTimeEN: item.readTimeEN,
      image: item.image,
      tags: item.tags,
      isVideo: item.isVideo ?? false,
    })),
  );
}

export function filterArticles(
  articles: FlatArticle[],
  query: string,
  activeTab: string,
): FlatArticle[] {
  return articles.filter((a) => {
    const q = query.trim().toLowerCase();

    // Search query match
    const matchesQuery =
      !q ||
      a.titleNE.toLowerCase().includes(q) ||
      a.titleEN.toLowerCase().includes(q) ||
      a.descriptionNE.toLowerCase().includes(q) ||
      a.descriptionEN.toLowerCase().includes(q) ||
      a.authorNE.toLowerCase().includes(q) ||
      a.authorEN.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));

    // Tab filter
    const matchesTab =
      activeTab === "all" ||
      activeTab === "samachar" ||
      (activeTab === "video" && a.isVideo === true) || 
      (activeTab === "opinion" &&
        a.tags.some((t) => t.toLowerCase() === "opinion"));

    return matchesQuery && matchesTab;
  });
}
