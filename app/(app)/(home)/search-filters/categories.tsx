import React from "react";

import { CategoryDropdown } from "@/app/(app)/(home)/category-dropdown";
import { Category } from "@/payload-types";
type CategoriesProps = {
  data: any;
};

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div>
      {data.map((category: Category) => (
        <div key={category.id}>
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};
