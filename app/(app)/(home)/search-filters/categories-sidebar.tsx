"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { useTRPC } from "@/trpc/client";

type Category = CategoriesGetManyOutput[number];

type CategoriesSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CategoriesSidebar = ({
  open,
  onOpenChange,
}: CategoriesSidebarProps) => {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useQuery(
    trpc.categories.getMany.queryOptions(),
  );
  const router = useRouter();

  const [parentCategories, setParentCategories] = useState<Category[] | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleOpenChange = (open: boolean) => {
    setSelectedCategory(null);
    setParentCategories(null);
    onOpenChange(open);
  };

  const currentCategories = parentCategories ?? data ?? [];

  const handleCategoryClick = (category: Category) => {
    if (category.subcategories?.length) {
      // Ensure subcategories are always properly shaped
      const normalized = category.subcategories.map((sub) => ({
        ...sub,
        subcategories: sub.subcategories ?? [],
      }));
      setParentCategories(normalized);
      setSelectedCategory(category);
    } else {
      const path =
        parentCategories && selectedCategory
          ? `/${selectedCategory.slug}/${category.slug}`
          : category.slug === "all"
            ? "/"
            : `/${category.slug}`;

      router.push(path);
      handleOpenChange(false);
    }
  };

  const handleBackClick = () => {
    setParentCategories(null);
    setSelectedCategory(null);
  };

  const backgroundColor = selectedCategory?.color ?? "white";

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {isLoading && <div className="p-4">Loading...</div>}
          {isError && (
            <div className="p-4 text-red-500">Failed to load categories.</div>
          )}

          {parentCategories && (
            <button
              onClick={handleBackClick}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center font-medium"
            >
              <ChevronLeftIcon className="size-4 mr-2" />
              Back
            </button>
          )}

          {currentCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center font-medium"
            >
              {category.name}
              {category.subcategories?.length > 0 && (
                <ChevronRightIcon className="size-4" />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
