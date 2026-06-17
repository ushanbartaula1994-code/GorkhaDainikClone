import { ChevronDown } from "lucide-react";
import type { NavLink, Headline, MarketItem } from "@/types/navbar";

export const navlinks: NavLink[] = [
  {
    name: {
      NE: "गृहपृष्ठ",
      EN: "Home",
    },
    href: "/",
    icons: null,
    height: "65px",
    width: "76.92px",
  },

  {
    name: {
      NE: "समाचार",
      EN: "News",
    },
    href: "",
    icons: <ChevronDown size={16} />,
    height: "65px",
    width: "100.95px",
   dropdown: [
  {
    name: {
      NE: "गोरखा",
      EN: "Gorkha",
    },
    href: "/category/gorkha",
  },
  {
    name: {
      NE: "प्रदेश समाचार",
      EN: "Province News",
    },
    href: "/category/province",
  },
  {
    name: {
      NE: "राष्ट्रिय",
      EN: "National",
    },
    href: "/category/national",
  },
  {
    name: {
      NE: "अन्तर्राष्ट्रिय",
      EN: "International",
    },
    href: "/category/international",
  },
  {
    name: {
      NE: "विचार",
      EN: "Opinion",
    },
    href: "/category/opinion",
  },
  {
    name: {
      NE: "मनोरञ्जन",
      EN: "Entertainment",
    },
    href: "/category/entertainment",
  },
  {
    name: {
      NE: "टेक्नोलोजी",
      EN: "Technology",
    },
    href: "/category/technology",
  },
  {
    name: {
      NE: "विदेशमा नेपाली",
      EN: "Nepali Abroad",
    },
    href: "/category/abroad-nepali",
  },
],
  },

  {
    name: {
      NE: "खेलकुद",
      EN: "Sports",
    },
    href: "/sports",
    icons: null,
    height: "65px",
    width: "100.95px",
  },

  {
    name: {
      NE: "अर्थ / बजार",
      EN: "Business/Market",
    },
    href: "/economy",
    icons: null,
    height: "65px",
    width: "101.81px",
  },

  {
    name: {
      NE: "भिडियो",
      EN: "Video",
    },
    href: "/video",
    icons: null,
    height: "65px",
    width: "80.88px",
  },
];

export const headlines: Headline[] = [
  {
    id: 1,
    title: {
      EN: "Major fire breaks out in Kathmandu — firefighters respond quickly",
      NE: "काठमाडौंमा ठूलो आगलागी — दमकलको छिटो प्रतिकार्य",
    },
  },
  {
    id: 2,
    title: {
      EN: "Budget passed in parliament — opposition continues protests",
      NE: "संसदमा बजेट पारित — विपक्षको विरोध जारी",
    },
  },
  {
    id: 3,
    title: {
      EN: "Earthquake tremor felt in Gorkha — no damage reported",
      NE: "गोरखामा भूकम्पको धक्का — कुनै क्षति भएन",
    },
  },
  {
    id: 4,
    title: {
      EN: "Nepal and India sign new trade agreement",
      NE: "नेपाल–भारत नयाँ व्यापार सम्झौतामा हस्ताक्षर",
    },
  },
  {
    id: 5,
    title: {
      EN: "National cricket team secures Asia Cup qualification",
      NE: "राष्ट्रिय क्रिकेट टोलीले एसिया कपमा स्थान सुरक्षित",
    },
  },
];
export const marketData: MarketItem[] = [
  { symbol: "NTC", price: 890, change: 12, percent: 1.4, trend: "up" },
  { symbol: "SHIVM", price: 178, change: -4, percent: -2.2, trend: "down" },
  { symbol: "NABIL", price: 1245, change: 15, percent: 1.2, trend: "up" },
  { symbol: "NICA", price: 940, change: -59, percent: -5.9, trend: "down" },
  { symbol: "HRL", price: 626, change: -8, percent: -1.3, trend: "down" },
];