export interface FlatArticle {
  slug: string;
  categorySlug: string;
  categoryTitleNE: string;
  categoryTitleEN: string;
  titleNE: string;
  titleEN: string;
  descriptionNE: string;
  descriptionEN: string;
  authorNE: string;
  authorEN: string;
  authorInitials: string;
  createdAtNE: string;
  createdAtEN: string;
  readTimeNE: string;
  readTimeEN: string;
  image: string;
  tags: string[];
  isVideo?: boolean;
}
