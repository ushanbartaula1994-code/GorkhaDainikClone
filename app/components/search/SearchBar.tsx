"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { searchBarVariants, searchCountVariants } from "@/app/animation/card";

interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  input: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  resultsCount: number;
  isLoading: boolean;
  query: string;
}

export default function SearchBar({
  inputRef,
  input,
  onInput,
  onClear,
  resultsCount,
  isLoading,
  query,
}: SearchBarProps) {
  const { lang } = useLanguage();

  // converte to nepali
  function toNepaliNumber(n: number): string {
    const digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return String(n).replace(/\d/g, (d) => digits[parseInt(d)]);
  }
return (
  <motion.div
    variants={searchBarVariants}
    initial="hidden"
    animate="visible"
    className="w-full bg-[#EDEAE3] border-b-2 border-black/10 py-5 sm:py-[22px]"
  >
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={onInput}
          placeholder={
            lang === "NE" ? "समाचार खोज्नुहोस्..." : "Search news..."
          }
          className="w-full px-[18px] py-[14px] bg-white border border-black/10 rounded-[6px]"
        />

        {input ? (
          <button
            onClick={onClear}
            className="inline-flex items-center justify-center min-w-[104px] px-[22px] py-[15px] bg-gray-100 rounded-[6px] text-gray-600 hover:bg-gray-200 whitespace-nowrap"
          >
            ✕
          </button>
        ) : (
          <button className="inline-flex items-center justify-center min-w-[104px] px-[22px] py-[15px] bg-[#C01C28] rounded-[6px] font-nep font-bold text-[14px] sm:text-[15.2px] leading-[100%] tracking-normal text-center text-white whitespace-nowrap">
            {lang === "NE" ? "खोज्नुहोस्" : "Search"}
          </button>
        )}
      </div>

      {!isLoading && (
       <motion.p
          variants={searchCountVariants}
          initial="hidden"
          animate="visible"
          className="mt-2"
        >
          <span className="font-nep font-normal text-[14px] sm:text-[15.2px] leading-[22px] sm:leading-[24.32px] tracking-normal text-[#7A7470]">
            {lang === "NE" ? toNepaliNumber(resultsCount) : resultsCount}{" "}
            {lang === "NE" ? "नतिजाहरू भेटियो" : "results found"}
          </span>

          <span className="font-nep font-bold text-[14px] sm:text-[15.2px] leading-[22px] sm:leading-[24.32px] tracking-normal text-[#7A7470]">
            {query && ` — ${query}`}
          </span>
        </motion.p>
      )}

      {isLoading && (
        <p className="mt-2 font-nep font-normal text-[14px] sm:text-[15.2px] leading-[22px] sm:leading-[24.32px] text-[#7A7470]">
          {lang === "NE" ? "खोजिँदैछ..." : "Searching..."}
        </p>
      )}
    </div>
  </motion.div>
);
}
