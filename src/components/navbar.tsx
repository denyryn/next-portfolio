"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed inset-x-0 z-50 backdrop-blur-md border-[0.1px] border-gray-200 dark:border-gray-800 transition-all duration-300 ease-out ${
        mobileMenuOpen
          ? "h-screen bg-background rounded-none"
          : "rounded-2xl bottom-2 left-1/2 -translate-x-1/2 backdrop-filter bg-opacity-0 max-w-[98vw] shadow-sm hover:shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo with subtle scale animation */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="size-9 dark:invert transition-transform duration-300 group-hover:scale-110">
              <Image
                src={logo}
                alt="Logo"
                className="transition-opacity duration-200 hover:opacity-80"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-gray-900 dark:text-gray-200"
                    : "text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                <span className="relative group">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right-side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/40 transition-all duration-300 cursor-pointer hidden md:flex"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-gray-100 transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 transition-transform duration-500 hover:-rotate-12 hover:scale-110" />
                )}
              </button>
            )}

            {/* Mobile Menu Button with animated transition */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden h-[calc(100vh-80px)] flex flex-col justify-center">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] text-center ${
                    pathname === link.href
                      ? "bg-blue-50 text-gray-900 dark:bg-white/20 dark:text-gray-200"
                      : "hover:bg-blue-50 dark:hover:bg-white/30 text-gray-700 dark:text-gray-300"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(10px)",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle for Mobile */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="mt-8 mx-auto p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer flex transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-6 h-6 text-gray-100 transition-transform duration-700 hover:rotate-180" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-700 transition-transform duration-700 hover:rotate-180" />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
