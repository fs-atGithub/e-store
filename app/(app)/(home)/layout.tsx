import { HydrationBoundary } from "@tanstack/react-query";
import React, { ReactNode, Suspense } from "react";

import { Footer } from "@/app/(app)/(home)/footer";
import { Navbar } from "@/app/(app)/(home)/navbar";
import {
  SearchFilters,
  SearchFiltersLoading,
} from "@/app/(app)/(home)/search-filters";
import { getQueryClient, trpc } from "@/trpc/server";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Navbar />
      <HydrationBoundary>
        <Suspense fallback={<SearchFiltersLoading />}>
          <SearchFilters />
        </Suspense>
      </HydrationBoundary>

      <div className={"flex-1 bg-[#f4f4f0]"}>{children}</div>
      <Footer />
    </div>
  );
};
export default HomeLayout;
