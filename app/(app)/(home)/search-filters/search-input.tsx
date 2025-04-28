"use client";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";

import { CategoriesSidebar } from "@/app/(app)/(home)/search-filters/categories-sidebar";
import { CustomCategory } from "@/app/(app)/(home)/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  disabled?: boolean;
  data: CustomCategory[];
};

export const SearchInput = ({ disabled, data }: SearchInputProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={"flex items-center gap-2 w-full"}>
      <CategoriesSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        data={data}
      />
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
      <Button
        variant={"elevated"}
        className={"size-12 shrink-0 lg:hidden"}
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon className={"size-4"} />
      </Button>
      {/*TODO: Add library button*/}
    </div>
  );
};
