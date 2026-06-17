export interface BreakingNewsItem {
  id: { EN: string; NE: string };
  slug: string;
  titleNE: string;
  titleEN: string;
  categoryNE: string;
  categoryEN: string;
  authorNE?: string;
  authorEN?: string;
  timeNE: string;
  timeEN: string; 
  isLive?: boolean; 
}
export interface BreakingCategory {
  slug: string;
  labelNE: string;
  labelEN: string;
  href: string;
}
