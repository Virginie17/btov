"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">B to V Développement</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground">
              Accueil
            </Link>
            <Link href="/services" className="text-foreground/60 transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/portfolio" className="text-foreground/60 transition-colors hover:text-foreground">
              Portfolio
            </Link>
            
            <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground">
              Contact
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}