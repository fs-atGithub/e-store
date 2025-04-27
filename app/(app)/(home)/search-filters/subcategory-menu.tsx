import React from "react";

import { Category } from "@/payload-types";

type SubcategoryMenuProps = {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
};

export const SubCategoryMenu = ({
  category,
  isOpen,
  position,
}: SubcategoryMenuProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }
  const backgroundColor = "#f5f5f5";

  return (
    <div
      className={"fixed zoom-in-100"}
      style={{ top: position.top, left: position.left }}
    >
      <div className={"h-3 w-60"} />
      <div className={"w-60 text-black rounded-md overflow-hidden border"}>
        <p>SubCategory</p>
      </div>
    </div>
  );
};
