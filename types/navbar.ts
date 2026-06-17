import { ReactNode } from "react";
import { LanguageText } from "@/types/language";

export interface NavLink {
  name: LanguageText;
  href: string;
  icons?: ReactNode | null;
  height: string;
  width: string;
  dropdown?: {
    name: LanguageText;
    href: string;
  }[];
}
export interface Headline {
  id: number;
  title: {
    EN: string;
    NE: string;
  };
}
export interface MarketItem {
  symbol: string;
  price: number;
  change: number;
  percent: number;
  trend: "up" | "down";
}
