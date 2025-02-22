// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur ">
      <div className="container flex h-14 items-center max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">Promptly</span>
          </Link>

          <div className="flex items-center gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary/80",
                  "text-primary/60 hover:text-primary",
                  "rounded-md px-3 py-2 text-sm font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-4">
            <Button
              variant="outline"
              asChild
              size="sm"
              className="rounded-full px-6 py-2"
            >
              <Link href={"/chat"}> Get Started Now</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 items-center justify-between">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between px-4 border-b h-14">
                  <span className="font-bold text-primary">Promptly</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-6 w-6 text-primary" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <div className="flex-1 my-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex py-2 px-8 text-primary/60 hover:text-primary",
                        "transition-colors",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="px-8 py-4 border-t">
                  <Button variant="secondary" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-primary">
            Promptly
          </Link>
          <div />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
