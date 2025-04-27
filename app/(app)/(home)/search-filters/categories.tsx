import React from "react";

import { CategoryDropdown } from "@/app/(app)/(home)/category-dropdown";
import { CustomCategory } from "@/app/(app)/(home)/types";
import { Category } from "@/payload-types";

type CategoriesProps = {
  data: CustomCategory[];
};

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className={"relative w-full"}>
      <div className={"flex items-center flex-nowrap"}>
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
