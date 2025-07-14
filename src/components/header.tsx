"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "#partners" },
    { name: "Students", href: "/students" },
    { name: "FAQs", href: "#faqs" },
    { name: "About", href: "#footer" },
  ];

  useEffect(() => {
    // Highlight 'Students' when on /students route
    if (pathname === "/students") {
      setActiveNav("Students");
      return;
    }
    const handleScroll = () => {
      // Only consider sections that are above the top of the viewport
      const visible = navigation.map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return { name: item.name, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { name: item.name, top: rect.top };
      });
      // Find the last section whose top is less than 120px from the top (header height + margin)
      const current = visible.filter((v) => v.top < 120).pop();
      if (current && current.name !== activeNav) {
        setActiveNav(current.name);
      } else if (!current && activeNav !== "Home") {
        setActiveNav("Home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeNav, navigation, pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 shadow-lg shadow-black/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="ECHELON 25"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            {/* <div className="text-2xl font-bold text-primary font-montserrat">
              ECHELON 25
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 font-montserrat hover:text-[#FFA600] hover:scale-110 ${
                        activeNav === item.name ? "text-[#FFA600]" : ""
                      } focus:outline-none focus:ring-0`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-primary hover:bg-[#FFA600] hover:text-white text-white font-montserrat rounded-full transition-all duration-200 hover:scale-105">
            <Link
              href="https://fill.buildform.ai/forms/QEbpjwC2dHhf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium font-montserrat rounded-md transition-all duration-200 hover:text-[#FFA600] hover:scale-110 ${
                    activeNav === item.name ? "text-[#FFA600]" : "text-gray-700"
                  } focus:outline-none focus:ring-0`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-primary hover:bg-[#FFA600] hover:text-white text-white font-montserrat rounded-full transition-all duration-200 hover:scale-105">
                  Register Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
