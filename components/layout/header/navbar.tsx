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
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-14 items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-primary text-lg">Promptly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-4 flex-1 max-w-2xl mx-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                "text-primary/60 rounded-md px-3 py-2 text-sm font-medium",
                "hover:bg-primary/10",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-6"
            asChild
          >
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/chat">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
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
                <SheetTitle>
                  <span className="font-bold text-primary">Promptly</span>
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
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
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  asChild
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button className="w-full rounded-full" asChild>
                  <Link href="/chat">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
