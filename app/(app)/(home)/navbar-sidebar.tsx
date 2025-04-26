import Link from "next/link";
import { ReactNode } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type NavbarItem = {
  href: string;
  children: ReactNode;
};

type NavbarSidebarProps = {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side={"left"}>
        <SheetHeader className={"p-4 border-b"}>
          <div className={"flex items-center"}>
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className={"flex flex-col overflow-y-auto h-full pb-2"}>
          {items.map((item) => (
            <Link
              className={
                "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              }
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className={"border-t"}>
            <Link
              href={"/sign-in"}
              className={
                "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              }
            >
              Log in
            </Link>
            <Link
              href={"/sign-up"}
              className={
                "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              }
            >
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
