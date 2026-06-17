export interface Category {
  slug: string;
  titleNE: string;
  titleEN: string;
  descriptionNE: string;
  descriptionEN: string;
  totalNewsEN: string;
  totalNewsNE: string;
  showFeatured?: boolean;
  filters?: {
    primary?: {
      labelNE: string;
      labelEN: string;
      value: string;
    }[];
    secondary?: {
      labelNE: string;
      labelEN: string;
      value: string;
    }[];
  };
  news: {
    id: { EN: string; NE?: string };
    slug: string;
    region?: string;
    duration?:string;
    category: string;
    primaryFilter?: string;
    secondaryFilter?: string;
    titleEN: string;
    titleNE: string;
    descriptionNE: string;
    descriptionEN: string;
    contentNE: string;
    contentEN: string;
    image: string ;
    imageDescpEN: string;
    imageDescpNE: string;
    newsDescription:string;
    keyPoint:string
    isVideo?:boolean
    keyPointsNE:string;
    keyPointsEN:string
    authorNE: string;
    authorEN: string;
    authorInitials: string;
    authorBioEN: string;
    authorBioNE: string;
    createdAtNE: string;
    createdAtEN: string;
    readTimeEN: string;
    readTimeNE: string;
    tags: string[];
    breadcrumb: {
      categoryEN: string;
      categoryNE: string;
    };
  }[];
}
