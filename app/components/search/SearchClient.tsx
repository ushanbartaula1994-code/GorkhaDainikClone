"use client";
import { FlatArticle } from "@/types/flatArticle.type";
import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { filterArticles } from "@/app/lib/search.utils";
import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import ResultCard from "./ResultCard";
import Pagination from "./Pagination";
import { useLanguage } from "@/app/context/LanguageContext";
import { searchPageTransition } from "@/app/animation/card";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
interface Props {
  allArticle: FlatArticle[];
}

export default function SearchClient({ allArticle }: Props) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const ARTICLES_PER_PAGE = 4;
  const router = useRouter();
  const { lang } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//focus on input while opening pge
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const pushUrl = useCallback(
    (q: string, cat: string) => {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (cat !== "all") params.set("cat", cat);
      router.replace(`/search?${params.toString()}`, { scroll: false });
    },
    [router],
  );

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setInput(val);
    setIsLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setQuery(val);
      setCurrentPage(1); // search chnage huda itwillgo tp  page 1 
      setIsLoading(false);
      pushUrl(val, activeCategory);
    }, 350);
  }

  function handleClear() {
    setInput("");
    setQuery("");
    setCurrentPage(1);
    pushUrl("", activeCategory);
    inputRef.current?.focus();
  }

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1); // tab change huda it will go to page 1
    pushUrl(query, cat);
  }
  const results = filterArticles(allArticle, query, activeCategory);
  const totalPages = Math.ceil(results.length / ARTICLES_PER_PAGE);
  const paginatedResults = results.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );
  return (
    <div>
      <SearchBar
        inputRef={inputRef}
        input={input}
        onInput={handleInput}
        onClear={handleClear}
        resultsCount={results.length}
        isLoading={isLoading}
        query={query}
      />

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="mt-4">
        {isLoading ? (
          <p className="text-center text-gray-400 font-nep py-10">
            {lang === "NE" ? "खोजिँदैछ..." : "Searching..."}
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-400 font-nep py-10">
            {lang === "NE"
              ? `"${query}" को लागि कुनै नतिजा भेटिएन`
              : `No results found for "${query}"`}
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage} // 
              variants={searchPageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4"
            >
              {paginatedResults.map((article) => (
                <ResultCard
                  key={article.slug}
                  article={article}
                  query={query}
                />
              ))}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
