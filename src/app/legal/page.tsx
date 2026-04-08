"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Gavel, 
  ShieldCheck, 
  Cookie, 
  Banknote, 
  Info, 
  ArrowRight,
  Phone,
  Mail,
  Star
} from "lucide-react";

/**
 * Legal Pages Configuration
 */
const LEGAL_PAGES = [
  {
    title: "Terms and Conditions",
    slug: "terms-and-conditions",
    description: "Defines rules, responsibilities, and service conditions for all modular unit rentals and sales across the GCC area.",
    icon: Gavel,
    color: "#006217"
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    description: "Explains data collection and protection protocols aligned with UAE federal standards and global security practices.",
    icon: ShieldCheck,
    color: "#006217"
  },
  {
    title: "Cookie Policy",
    slug: "cookie-policy",
    description: "Details cookie usage and tracking technologies used to optimize your digital experience within our ecosystem.",
    icon: Cookie,
    color: "#006217"
  },
  {
    title: "Refund Policy",
    slug: "refund-policy",
    description: "Comprehensive information regarding payments, booking cancellations, and eligibility for modular solutions.",
    icon: Banknote,
    color: "#006217"
  },
  {
    title: "Disclaimer",
    slug: "disclaimer",
    description: "Outlines liability limits, content accuracy, and the specific legal framework governing our technical documentation.",
    icon: Info,
    color: "#006217"
  }
];

export default function LegalHub() {
  const router = useRouter();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen bg-background text-foreground font-body">
      
      {/* Sticky Back Navigation Action (Matching Corporate Style) */}
      <div className="sticky top-16 z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-background/0 backdrop-blur-[2px] pointer-events-none mb-4">
        <button
          onClick={() => router.push('/')}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background dark:bg-card hover:bg-white dark:hover:bg-muted/40 hover:border-[#006217]/30 hover:text-[#006217] transition-all duration-500 text-xs font-black uppercase tracking-widest shadow-lg pointer-events-auto cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-500" />
          Back to Home
        </button>
      </div>

      {/* Hero Section: Corporate Authority */}
      <section className="relative overflow-hidden bg-muted/20 rounded-3xl p-8 md:p-16 mb-16 border border-border/40">
        <div className="absolute inset-0 blueprint-pattern opacity-10 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-[#006217]/10 text-[#006217] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
              Official Compliance Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight text-[#006217] mb-6 leading-tight">
              Legal Information <br/> & Policies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Explore the framework of accountability that defines Kazema Global. We prioritize 
              structural transparency, ensuring every modular solution is backed by legal integrity.
            </p>
          </div>
          <div className="hidden md:flex w-1/3 justify-center">
            <div className="relative w-56 h-56 bg-background rounded-3xl flex items-center justify-center shadow-2xl ring-1 ring-[#006217]/10 rotate-3 group overflow-hidden">
                <div className="absolute inset-0 blueprint-pattern opacity-30"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#006217]/5 rounded-full blur-3xl"></div>
                <Gavel size={90} className="text-[#006217] relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Pages Grid: Modern Stich Aesthetic */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {LEGAL_PAGES.map((page) => (
          <Link 
            key={page.slug} 
            href={`/legal/${page.slug}`}
            className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#006217]/30 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#006217]/5 rounded-full blur-2xl group-hover:bg-[#006217]/10 transition-colors"></div>
            
            <div className="w-14 h-14 bg-muted/30 rounded-2xl flex items-center justify-center mb-6 text-[#006217] group-hover:bg-[#006217] group-hover:text-white transition-all duration-500 shadow-inner relative z-10">
              <page.icon size={28} />
            </div>
            
            <h3 className="text-xl font-headline font-black text-foreground mb-3 tracking-tight relative z-10">{page.title}</h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 relative z-10">
              {page.description}
            </p>
            
            <div className="inline-flex items-center text-[#006217] font-bold text-[10px] uppercase tracking-[0.2em] gap-2 group-hover:gap-4 transition-all relative z-10">
              Read Policy <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </section>

      {/* Core Integrity Section */}
      <section className="bg-muted/10 rounded-3xl py-24 px-8 mb-24 border border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006217]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-[#006217] text-[#006217] opacity-60" />
            ))}
          </div>
          <span className="font-black text-[#006217] tracking-[0.3em] uppercase text-[10px]">Foundations of Trust</span>
          <h2 className="text-3xl md:text-5xl font-headline font-black text-foreground mt-4 mb-10 tracking-tight leading-tight">
            Building Excellence Through <br/> Clear Accountability
          </h2>
          <div className="space-y-8 text-muted-foreground text-lg leading-relaxed font-medium">
            <p>
              At Kazema Global, we believe that the physical strength of our modular units is matched only by 
              the integrity of our professional relationships. Our legal framework provides the security 
              required for major construction and event operations across the UAE.
            </p>
            <p>
              By maintaining rigorous standards and transparent policies, we ensure that every client—from 
              organizers to infrastructure firms—understands the level of excellence they can expect from us.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Compliance CTA Section */}
      <section className="relative bg-[#006217] rounded-[2rem] overflow-hidden p-10 md:p-20 shadow-2xl mb-12">
        <div className="absolute inset-0 blueprint-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rotate-12"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-headline font-black text-white mb-8 tracking-tighter leading-[1.1]">
              Legal Inquiries & <br/> Compliance Support
            </h2>
            <Link 
              href="/support/contact-us"
              className="inline-block bg-white text-[#006217] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-50 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              Contact Legal Office
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white w-full lg:w-auto">
            <div className="flex flex-col items-center lg:items-start p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
              <Phone size={22} className="mb-4 text-white group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Corporate Hotline</span>
              <span className="font-bold text-base">800 KAZEMA (529362)</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
              <Mail size={22} className="mb-4 text-white group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Inquiry Mailbox</span>
              <span className="font-bold text-base">legal@kazemaglobal.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
