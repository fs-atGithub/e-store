import React from "react";

import { Categories } from "@/app/(app)/(home)/search-filters/categories";
import { SearchInput } from "@/app/(app)/(home)/search-filters/search-input";

type SearchFiltersProps = {
  data: any;
};

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className={"px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"}>
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};
