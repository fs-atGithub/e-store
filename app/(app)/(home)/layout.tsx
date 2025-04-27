import { getPayload } from "payload";
import React, { ReactNode } from "react";

import { Footer } from "@/app/(app)/(home)/footer";
import { Navbar } from "@/app/(app)/(home)/navbar";
import { SearchFilters } from "@/app/(app)/(home)/search-filters";
import { CustomCategory } from "@/app/(app)/(home)/types";
import { Category } from "@/payload-types";
import configPromise from "@payload-config";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });
  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className={"flex flex-col min-h-screen"}>
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className={"flex-1 bg-[#f4f4f0]"}>{children}</div>
      <Footer />
    </div>
  );
};
export default HomeLayout;
