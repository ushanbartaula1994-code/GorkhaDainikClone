"use client";

import ReactPaginate from "react-paginate";
import { useLanguage } from "@/app/context/LanguageContext";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const { lang } = useLanguage();

  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1} // react-paginate is 0-based
      onPageChange={(e) => onPageChange(e.selected + 1)}
      previousLabel="‹"
      nextLabel="›"
      breakLabel="..."
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="flex items-center justify-center gap-2 mt-6 pb-6"
      pageClassName="font-nep"
      pageLinkClassName="px-3 py-1 rounded border border-gray-300 cursor-pointer text-gray-600 hover:bg-gray-100 block"
      activeClassName="!border-[#C01C28]"
      activeLinkClassName="bg-[#C01C28] text-white hover:bg-[#C01C28] cursor-pointer"
      previousClassName="font-nep"
      previousLinkClassName="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer block"
      nextClassName="font-nep"
      nextLinkClassName="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 block"
      disabledClassName="opacity-30 cursor-not-allowed"
      breakLinkClassName="px-3 py-1 text-gray-400"
    />
  );
}
