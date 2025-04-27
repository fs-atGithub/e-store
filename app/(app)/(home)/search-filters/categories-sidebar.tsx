"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { CustomCategory } from "@/app/(app)/(home)/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type CategoriesSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: CustomCategory[];
};

export const CategoriesSidebar = ({
  open,
  onOpenChange,
  data,
}: CategoriesSidebarProps) => {
  const router = useRouter();
  const [parentCategory, setParentCategory] = useState<CustomCategory | null>(
    null,
  );

  const handleOpenChange = (open: boolean) => {
    setParentCategory(null);
    onOpenChange(open);
  };

  const currentCategories = parentCategory?.subcategories ?? data;

  const handleCategoryClick = (category: CustomCategory) => {
    if (category.slug === "all") {
      // Redirect to the homepage if the slug is "all"
      router.push(`/`);
      onOpenChange(false); // Close sidebar
      return;
    }

    if (category.subcategories && category.subcategories.length > 0) {
      setParentCategory(category); // Dive into subcategories
    } else {
      // Navigate to the correct category URL, including parent category if applicable
      if (parentCategory) {
        router.push(`/categories/${parentCategory.slug}/${category.slug}`); // Correct URL format
      } else {
        router.push(`/categories/${category.slug}`); // Top-level category
      }
      onOpenChange(false); // Close sidebar
    }
  };

  const backgroundColor = parentCategory?.color ?? "white";

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
          {parentCategory && (
            <button
              onClick={() => setParentCategory(null)}
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
              {category.subcategories && category.subcategories.length > 0 && (
                <ChevronRightIcon className="size-4" />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
