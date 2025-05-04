"use client";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";

import { CategoriesSidebar } from "@/app/(app)/(home)/search-filters/categories-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchInput = ({ disabled }: { disabled: boolean }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div suppressHydrationWarning className={"flex items-center gap-2 w-full"}>
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
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
