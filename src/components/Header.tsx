"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronDown } from "lucide-react";

const SUPPORT_LINKS = [
  { name: "Contact Us", href: "/support/contact-us" },
  { name: "Frequently Asked Question", href: "/support/frequently-asked-question" },
  { name: "Installation Guide", href: "/support/installation-guide" },
  { name: "Maintenance Guide", href: "/support/maintenance-guide" },
];

const RESOURCE_LINKS = [
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Download Center", href: "/resources/download-center" },
  { name: "Events", href: "/resources/events" },
];

export default function Header() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  // Lock body scroll when mobile menu is open to maintain layout stability
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[100] w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 relative z-[110]" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="https://www.kazemaportabletoilets.com/wp-content/uploads/Kazema-Portable-Toilets.webp"
            alt="Kazema Portable Toilets"
            width={150}
            height={40}
            className="h-9 w-auto object-contain dark:invert-[0.1]"
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-green-600 transition-colors font-bold">Home</Link>
            <Link href="/products" className="hover:text-green-600 transition-colors font-bold">Products</Link>
            <Link href="/projects" className="hover:text-green-600 transition-colors font-bold">Projects</Link>
            <Link href="/careers" className="hover:text-green-600 transition-colors font-bold">Careers</Link>

            {/* Resources Dropdown */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <Link
                href="/resources"
                className={`flex items-center gap-1.5 transition-colors font-bold ${isResourcesOpen ? "text-[#006217] dark:text-[#28a745]" : "hover:text-[#006217]"}`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Glassmorphism Menu */}
              <div
                className={`absolute right-0 top-full mt-0 w-64 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-2 transition-all duration-300 origin-top overflow-hidden z-50
                  ${isResourcesOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                `}
              >
                <div className="flex flex-col gap-1">
                  {RESOURCE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2.5 rounded-xl text-sm font-bold text-muted-foreground hover:text-[#006217] hover:bg-[#006217]/5 transition-all flex items-center justify-between group/item"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {link.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006217] scale-0 group-hover/item:scale-100 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-green-600 transition-colors font-bold">About Us</Link>

            {/* Support Dropdown */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setIsSupportOpen(true)}
              onMouseLeave={() => setIsSupportOpen(false)}
            >
              <Link
                href="/support/contact-us"
                className={`flex items-center gap-1.5 transition-colors font-bold ${isSupportOpen ? "text-[#006217] dark:text-[#28a745]" : "hover:text-[#006217]"}`}
              >
                Support
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSupportOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Glassmorphism Menu */}
              <div
                className={`absolute right-0 top-full mt-0 w-64 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-2 transition-all duration-300 origin-top overflow-hidden z-50
                  ${isSupportOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                `}
              >
                <div className="flex flex-col gap-1">
                  {SUPPORT_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2.5 rounded-xl text-sm font-bold text-muted-foreground hover:text-[#006217] hover:bg-[#006217]/5 transition-all flex items-center justify-between group/item"
                      onClick={() => setIsSupportOpen(false)}
                    >
                      {link.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006217] scale-0 group-hover/item:scale-100 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="h-6 w-px bg-border hidden md:block"></div>
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="flex md:hidden items-center justify-center w-11 h-11 rounded-xl hover:bg-[#006217]/5 transition-colors relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-4">
              <span className={`absolute left-0 w-full h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? "top-2 rotate-45 bg-[#006217] dark:bg-[#28a745]" : "top-0 bg-[#006217] dark:bg-white"}`} />
              <span className={`absolute left-0 w-full h-0.5 transition-all duration-300 rounded-full top-[7px] ${isMobileMenuOpen ? "opacity-0 -translate-x-2 bg-[#006217]" : "opacity-100 bg-[#006217] dark:bg-white"}`} />
              <span className={`absolute left-0 w-full h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? "top-2 -rotate-45 bg-[#006217] dark:bg-[#28a745]" : "top-[14px] bg-[#006217] dark:bg-white"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Starts below Header (64px) */}
      <div
        className={`fixed left-0 top-[64px] w-full h-[calc(100vh-64px)] z-[105] md:hidden transition-all duration-500 overflow-hidden
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Full Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Nav Content Area (Scrollable if content exceeds height) */}
        <nav className={`relative w-full max-h-full bg-background/98 backdrop-blur-3xl shadow-2xl flex flex-col px-8 py-10 overflow-y-auto transition-transform duration-500 ease-out border-t border-border/40
          ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-10"}
        `}>
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="text-lg font-bold uppercase tracking-wider hover:text-[#006217] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-lg font-bold uppercase tracking-wider hover:text-[#006217] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/projects"
              className="text-lg font-bold uppercase tracking-wider hover:text-[#006217] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/careers"
              className="text-lg font-bold uppercase tracking-wider hover:text-[#006217] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>

            {/* Mobile Resources Accordion */}
            <div className="flex flex-col gap-4">
              <button
                className="flex items-center justify-between text-lg font-bold uppercase tracking-wider text-[#006217] text-left"
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
              >
                Resources
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isMobileResourcesOpen ? "rotate-180 text-[#28a745]" : ""}`} />
              </button>

              <div className={`flex flex-col gap-3 pl-4 border-l-2 border-[#006217]/20 transition-all duration-500 overflow-hidden
                ${isMobileResourcesOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}
              `}>
                {RESOURCE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-muted-foreground hover:text-[#006217] transition-colors flex items-center gap-3 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#006217]/30 group-hover:bg-[#006217] transition-colors" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#"
              className="text-lg font-bold uppercase tracking-wider hover:text-[#006217] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Support Accordion */}
            <div className="flex flex-col gap-4">
              <button
                className="flex items-center justify-between text-lg font-bold uppercase tracking-wider text-[#006217] text-left"
                onClick={() => setIsMobileSupportOpen(!isMobileSupportOpen)}
              >
                Support
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isMobileSupportOpen ? "rotate-180 text-[#28a745]" : ""}`} />
              </button>

              <div className={`flex flex-col gap-3 pl-4 border-l-2 border-[#006217]/20 transition-all duration-500 overflow-hidden
                ${isMobileSupportOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}
              `}>
                {SUPPORT_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-muted-foreground hover:text-[#006217] transition-colors flex items-center gap-3 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#006217]/30 group-hover:bg-[#006217] transition-colors" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* mobile menu footer - GET QUOTE BUTTON */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col gap-6 relative z-10">
            <button
              className="w-full bg-[#006217] hover:bg-[#005213] text-white py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#006217]/20 active:scale-95 flex items-center justify-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Professional Quote
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
