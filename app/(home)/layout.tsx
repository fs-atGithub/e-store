import React, { ReactNode } from "react";

import { Footer } from "@/app/(home)/footer";
import { Navbar } from "@/app/(home)/navbar";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Navbar />
      <div className={"flex-1 bg-[#f4f4f0]"}>{children}</div>
      <Footer />
    </div>
  );
};
export default HomeLayout;
