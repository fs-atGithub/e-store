"use client";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

import { NavbarSidebar } from "@/app/(home)/navbar-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
type NavbarItemProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        {
          "bg-black text-white hover:bg-black hover:text-white": isActive,
        },
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className={"flex justify-between border-b bg-white font-medium h-20"}>
      <Link href={"/"} className={"flex items-center pl-6"}>
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className={"items-center gap-x-4 hidden lg:flex"}>
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className={"hidden lg:flex"}>
        <Button
          asChild
          variant={"secondary"}
          className={
            "border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white   hover:bg-pink-400  transition-colors text-lg"
          }
        >
          <Link href={"/sign-in"}>Log in</Link>
        </Button>
        <Button
          asChild
          className={
            "border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          }
        >
          <Link href={"/sign-up"}>Start selling</Link>
        </Button>
      </div>
      <div className={"flex lg:hidden items-center justify-center"}>
        <Button
          variant={"ghost"}
          className={"size-12 border-transparent bg-white"}
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
