import { SearchIcon } from "lucide-react";
import React from "react";

import { Input } from "@/components/ui/input";

type SearchInputProps = {
  disabled?: boolean;
};

export const SearchInput = ({ disabled }: SearchInputProps) => {
  return (
    <div className={"flex items-center gap-2 w-full"}>
      <div className={"relative w-full"}>
        <SearchIcon
          className={
            "absolute size-4 left-3 top-1/2 -translate-y-1/2 text-neutral-500"
          }
        />
        <Input
          className={"pl-8 "}
          placeholder={"Search products"}
          disabled={disabled}
        />
      </div>
      {/*TODO: Add categories button*/}
      {/*TODO: Add library button*/}
    </div>
  );
};
