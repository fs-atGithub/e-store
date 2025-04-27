import React from "react";

type SearchFiltersProps = {
  disabled?: boolean;
};

export const SearchFilters = ({ disabled }: SearchFiltersProps) => {
  return (
    <div className={"px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"}>
      SearchFilters
    </div>
  );
};
