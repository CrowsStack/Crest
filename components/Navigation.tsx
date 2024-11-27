"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const services = [
  {
    title: "Personal Loans",
    href: "/products#personal",
    description: "Quick personal loans for your immediate needs",
  },
  {
    title: "Business Loans",
    href: "/products#business",
    description: "Grow your business with our flexible financing options",
  },
  {
    title: "Mortgage Loans",
    href: "/products#mortgage",
    description: "Make your dream home a reality",
  },
  {
    title: "Equipment Financing",
    href: "/products#equipment",
    description: "Finance your business equipment needs",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Our Company", href: "/company" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-3xl">
            CrestBeam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="text-base">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href} className="px-2">
                  {item.name === "Products" ? (
                    <>
                      <NavigationMenuTrigger className="text-base">Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((service) => (
                            <li key={service.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-base font-medium leading-none">
                                    {service.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : item.isButton ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-base font-medium px-3 py-1.5 bg-black text-white rounded-md hover:bg-black/90 transition-colors inline-block"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
            <nav className="container py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    item.isButton
                      ? "block py-1.5 px-3 text-base font-medium bg-black text-white rounded-md hover:bg-black/90 transition-colors w-fit"
                      : "block py-2 text-base font-medium transition-colors hover:text-primary",
                    !item.isButton && pathname === item.href
                      ? "text-primary"
                      : !item.isButton ? "text-muted-foreground" : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}