import React from "react";

type SearchFiltersProps = {
  data: any;
};

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <pre>
      <div>{JSON.stringify(data, null, 2)}</div>
    </pre>
  );
};
