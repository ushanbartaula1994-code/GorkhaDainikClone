"use client";

import type { Category } from "@/types/catagory.type";
import OpinionPreview from "./OpinonPreview";
import InternationalPreview from "./InternationalPreview";


interface Props {
  opinion: Category;
  international: Category;
}

function OpinionInternationalPreview({ opinion, international }: Props) {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row border ">
      <div className=" min-w-0 w-full border-r md:w-[50%] ">
        <OpinionPreview category={opinion} />
      </div>
     
      <div className=" min-w-0">
        <InternationalPreview category={international} />
      </div>
    </div>
  );
}

export default OpinionInternationalPreview;
