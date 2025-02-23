import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
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
                "hover:text-primary",
                "text-primary rounded-md px-3 py-2 text-sm ",
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
            <Link href="/chat">Sign In</Link>
          </Button>
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/chat">Chat Now</Link>
          </Button>
        </div>
        {/* Mobile Navigation */}
        <MobileNavbar navItems={navItems} />
      </div>
    </header>
  );
};

export default Navbar;
