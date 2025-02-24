"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import ThemeToggler from "@/components/ui/toogle-button";

const MobileNavbar = ({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu className="h-6 w-6 text-primary" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 border-b h-14">
            <SheetTitle className="flex justify-center items-center gap-2">
              <span className="font-bold text-primary">Promptly</span>
              <ThemeToggler />
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-primary" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex py-2 px-4 text-primary/60 hover:text-primary",
                    "transition-colors hover:bg-primary/10",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t p-4 space-y-2">
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link href="/chat">Sign In</Link>
            </Button>
            <Button className="w-full rounded-full" asChild>
              <Link href="/chat">Get Started</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
