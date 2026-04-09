"use client";

import React, { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import { 
  ChevronDown, Phone, Search, Headset, LogIn, Menu, X, Globe, 
  ChevronRight, MessageSquare, Camera, Send, Users, MapPin, Mail, ArrowUpRight,
  History, Factory, Cpu, Award, Zap, Home, ShieldCheck, Droplets, Box, Wrench
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileLinks, setExpandedMobileLinks] = useState<string[]>([]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  const t = useTranslations('Header');
  const navT = useTranslations('Nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
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

  const onLanguageChange = (nextLocale: 'en' | 'ar') => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
    setIsLangOpen(false);
  };

  // Handle mobile accordion toggle
  const toggleMobileLink = (name: string) => {
    setExpandedMobileLinks(prev => 
      prev.includes(name) ? prev.filter(l => l !== name) : [...prev, name]
    );
  };

  const navLinks = [
    { name: navT("home"), href: "/" },
    { 
      name: navT("aboutUs"), 
      href: "/about-us",
      sublinks: [
        { name: "Our Story", href: "/about-us/our-story", icon: History, desc: "Our journey since foundation" },
        { name: "Our Factory", href: "/about-us/our-factory", icon: Factory, desc: "Where innovation happens" },
        { name: "Manufacturing Process", href: "/about-us/manufacturing-process", icon: Cpu, desc: "Tech-driven construction" },
        { name: "Certifications", href: "/about-us/certifications", icon: Award, desc: "Quality guaranteed" },
      ]
    },
    { 
      name: navT("products"), 
      href: "/products",
      sublinks: [
        { name: "Portable Toilets", href: "/products?cat=Portable+Toilets", icon: Zap, desc: "Premium sanitation units" },
        { name: "Portable Cabins", href: "/products?cat=Portable+Cabins", icon: Home, desc: "Advanced modular housing" },
        { name: "Security Cabins", href: "/products?cat=Security+Cabins", icon: ShieldCheck, desc: "Safe & durable kiosks" },
        { name: "Handwash Stations", href: "/products?cat=Handwash+Stations", icon: Droplets, desc: "Hygienic station solutions" },
        { name: "Container Conversion", href: "/products?cat=Container+Conversion", icon: Box, desc: "Customized cargo spaces" },
      ]
    },
    { 
      name: navT("services"), 
      href: "/services",
      sublinks: [
        { name: "Rental Toilets", href: "/services?cat=Rental+Toilets", icon: Wrench, desc: "Short & long term rentals" },
        { name: "Handwash Stations", href: "/services?cat=Handwash+Stations", icon: Droplets, desc: "Mobile hygiene services" },
      ]
    },
    { name: navT("projects"), href: "/projects" },
    { name: navT("resources"), href: "/resources" },
  ];

  return (
    <>
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. TOP UTILITY BAR (HIDDEN ON MOBILE)                    */}
      {/* ───────────────────────────────────────────────────────── */}
      <header className="w-full flex-col z-[100] relative hidden md:flex">
        <div className="w-full bg-[#fcfaf7] dark:bg-muted/20 border-b border-border/10 py-1.5 transition-all">
          <div className="mx-auto max-w-7xl px-6 flex justify-between items-center text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
            {/* Left: Contact info */}
            <div className="flex items-center gap-2 text-[#006217] hover:opacity-80 transition-opacity cursor-pointer font-medium">
              <Phone className="w-3 h-3" />
              <span>800KAZEMA</span>
            </div>

            {/* Right: Auth, Lang & Theme Toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-4">
                <div className="relative">
                  <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-1.5 cursor-pointer hover:text-[#006217] transition-colors group outline-none"
                    disabled={isPending}
                  >
                    <Globe className="w-3 h-3 text-[#006217] group-hover:scale-110 transition-transform" />
                    <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                    <ChevronDown className={`w-2.5 h-2.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Language Dropdown */}
                  {isLangOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 w-36 bg-white/95 dark:bg-card/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-xl py-2 z-[110] animate-in fade-in slide-in-from-top-2 duration-200">
                      <button
                        onClick={() => onLanguageChange('en')}
                        className={`w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#006217]/5 transition-colors ${locale === 'en' ? 'text-[#006217]' : 'text-muted-foreground'}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => onLanguageChange('ar')}
                        className={`w-full text-right px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#006217]/5 transition-colors ${locale === 'ar' ? 'text-[#006217]' : 'text-muted-foreground'} font-arabic`}
                      >
                        العربية
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="h-2.5 w-px bg-border/40" />
                
                <ThemeToggle />
              </div>
              
              <div className="h-2.5 w-px bg-border/40 hidden md:block" />

              <div className="flex items-center gap-4">
                <Link href="/login" className="hover:text-[#006217] transition-colors flex items-center gap-1 font-medium">
                  <LogIn className="w-3 h-3" />
                  {t('login')}
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-[#006217] text-white px-3 py-1 rounded hover:bg-[#004e12] transition-colors font-semibold shadow-sm text-[10px]"
                >
                  {t('signup')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. MAIN NAVIGATION BAR (STICKY AT TOP ON SCROLL)         */}
      {/* ───────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-[110] w-full bg-background dark:bg-background border-b border-border/40 h-16 md:h-18 flex items-center shadow-sm">
        <div className="mx-auto max-w-[1440px] w-full px-6 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center relative z-[120]">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="https://www.kazemaportabletoilets.com/wp-content/uploads/Kazema-Portable-Toilets.webp"
                alt="Kazema Portable Toilets"
                width={150}
                height={35}
                className="h-7 md:h-8 w-auto object-contain dark:invert-[0.1] hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Center: Navigation Menu with Dropdowns (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="h-full flex items-center relative"
                onMouseEnter={() => link.sublinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={`text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.1em] transition-all flex items-center gap-1 py-4 whitespace-nowrap
                    ${activeDropdown === link.name ? "text-[#006217]" : "text-foreground/80 hover:text-[#006217]"}
                  `}
                >
                  {link.name}
                  {link.sublinks && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Desktop Dropdown Content */}
                {link.sublinks && (
                  <div 
                    className={`absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[480px] bg-white/95 dark:bg-card/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-2xl p-4 transform transition-all duration-300 origin-top
                      ${activeDropdown === link.name ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                    `}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-[#006217]/5 transition-all"
                        >
                          <div className="mt-0.5 p-2 rounded-lg bg-[#006217]/5 text-[#006217] group-hover/item:bg-[#006217] group-hover/item:text-white transition-all">
                            {sub.icon && <sub.icon className="w-4 h-4" />}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-foreground group-hover/item:text-[#006217] transition-colors">
                              {sub.name}
                            </span>
                            {sub.desc && (
                              <span className="text-[11px] text-muted-foreground line-clamp-1">
                                {sub.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer for the dropdown */}
                    <div className="mt-4 pt-4 border-t border-border/10 flex items-center justify-between px-2">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Kazema Quality Guaranteed</span>
                      <Link href={link.href} className="text-[10px] text-[#006217] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                        View All <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Support Button & Search */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/support/contact-us"
              className="group flex items-center gap-2 bg-[#f8f9fa] dark:bg-muted/30 hover:bg-[#006217]/5 border border-border/40 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <Headset className="w-4 h-4 text-[#006217]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">{t('support')}</span>
            </Link>

            <div className="relative group flex items-center">
              <input 
                type="text" 
                placeholder={t('search')} 
                className="bg-[#f8f9fa] dark:bg-muted/30 border border-border/40 px-4 py-2.5 pr-10 rounded-lg text-[11px] font-light w-32 xl:w-44 focus:w-56 focus:outline-none focus:border-[#006217]/20 transition-all duration-500"
              />
              <Search className="absolute right-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center relative z-[150]">
            {!isMobileMenuOpen && (
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#006217]/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open Menu"
                >
                  <Menu className="w-6 h-6 text-[#006217]" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────── */}
        {/* 3. REFINED MOBILE MENU OVERLAY                            */}
        {/* ───────────────────────────────────────────────────────── */}
        <div
          className={`fixed inset-0 z-[140] lg:hidden transition-all duration-500
            ${isMobileMenuOpen ? "opacity-100 pointer-events-auto block" : "opacity-0 pointer-events-none hidden"}
          `}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Content Pane */}
          <nav className={`absolute right-0 top-0 w-[85%] sm:w-[50%] h-full bg-background flex flex-col transition-transform duration-500 ease-out shadow-2xl
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}>
            
            {/* Drawer Header Area (Logo + Toggle + Close) */}
            <div className="px-6 pt-6 pb-6 border-b border-border/20 flex items-center justify-between">
              <Image
                src="https://www.kazemaportabletoilets.com/wp-content/uploads/Kazema-Portable-Toilets.webp"
                alt="Kazema Portable Toilets"
                width={120}
                height={28}
                className="h-6 w-auto object-contain dark:invert-[0.1]"
              />
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="flex-1 flex flex-col px-8 py-6 gap-0.5 overflow-y-auto overflow-x-hidden scrollbar-hide">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col group">
                  <div className="flex items-center justify-between w-full">
                    <Link 
                      href={link.href}
                      className="text-2xl font-bold tracking-tight py-3 hover:text-[#006217] transition-all flex items-center gap-2 group-hover:translate-x-1"
                      onClick={() => !link.sublinks && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {!link.sublinks && <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </Link>
                    {link.sublinks && (
                      <button 
                        onClick={() => toggleMobileLink(link.name)}
                        className={`p-3 rounded-full transition-all ${expandedMobileLinks.includes(link.name) ? "bg-[#006217]/10 text-[#006217]" : "text-muted-foreground"}`}
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMobileLinks.includes(link.name) ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>

                  {/* Modern Accordion Content */}
                  {link.sublinks && (
                    <div 
                      className={`overflow-hidden transition-all duration-500 flex flex-col pl-4 gap-1 relative
                        ${expandedMobileLinks.includes(link.name) ? "max-h-[500px] mt-2 mb-4 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="absolute left-0 top-0 w-px h-full bg-border" />
                      {link.sublinks.map((sub, idx) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="py-2.5 px-2 text-[13px] font-medium uppercase tracking-wider text-muted-foreground hover:text-[#006217] hover:bg-muted/50 rounded-lg transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* 1. Support Button (After Nav Links) */}
              <div className="mt-4 pt-6 flex flex-col gap-4 border-t border-border/10">
                <Link 
                  href="/support/contact-us"
                  className="flex items-center justify-between p-4 bg-[#006217]/5 hover:bg-[#006217]/10 rounded-xl transition-all group border border-[#006217]/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <Headset className="w-5 h-5 text-[#006217]" />
                    <span className="text-sm font-bold uppercase tracking-wide">Support Desk</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Footer area (Pushed up to clear bottom bar) */}
            <div className="px-8 pt-8 pb-24 bg-muted/20 border-t border-border/20 flex flex-col gap-6">
              
              {/* 2. Social Media Links (5 Icons) */}
              <div className="flex items-center justify-between px-2">
                {[MessageSquare, Camera, Send, Users, Globe].map((Icon, i) => (
                  <button key={i} className="p-2.5 bg-background border border-border/40 rounded-xl hover:text-[#006217] hover:border-[#006217]/50 transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>

              {/* 3. Bottom Auth Actions (Login/Sign Up) */}
              <div className="flex gap-4">
                 <Link 
                  href="/login" 
                  className="flex-1 text-center py-3.5 text-[11px] font-bold uppercase tracking-widest border border-border/60 rounded-xl hover:bg-muted/50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link 
                  href="/signup" 
                  className="flex-1 text-center py-3.5 text-[11px] font-bold uppercase tracking-widest bg-[#006217] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#004e12] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('signup')}
                </Link>
              </div>
            </div>

          </nav>
        </div>
      </nav>
    </>
  );
}
