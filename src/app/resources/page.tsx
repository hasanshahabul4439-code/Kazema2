import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  Calendar, 
  ArrowRight, 
  ArrowDown,
  Settings
} from "lucide-react";

export default function ResourcesHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-[#006217]/20 selection:text-[#006217]">
      {/* 1. HERO SECTION (TEXT ONLY - MINIMAL & ATTRACTIVE) */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden bg-muted/20 border-b border-border/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#006217]/5 via-transparent to-transparent" />
          <div className="absolute inset-0 blueprint-pattern opacity-10" />
          {/* Background Decorative Icon */}
          <div className="absolute right-[-5%] top-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText size={400} strokeWidth={0.5} className="text-[#006217] -rotate-12" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-4xl">
            <span className="text-[10px] font-black font-headline uppercase tracking-[0.4em] text-[#006217] mb-4 block">Support & Knowledge Hub</span>
            <h1 className="text-5xl md:text-7xl font-black font-headline text-[#006217] mb-6 tracking-tighter leading-none italic">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl italic">
              Explore professional insights, technical specifications, and the latest news from the world of modular sanitation technology.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TILES SECTION */}
      <section id="categories" className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blogs */}
            <Link href="/resources/blogs" className="group bg-[#006217]/5 p-8 rounded-2xl border border-[#006217]/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start">
              <div className="w-12 h-12 bg-[#006217]/10 rounded-lg flex items-center justify-center mb-6 text-[#006217]">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-black text-[#006217] font-headline mb-4">Blogs</h3>
              <p className="text-muted-foreground font-medium mb-6 text-sm leading-relaxed">
                Latest insights, guides, and industry knowledge about portable toilets, cabins, and modular solutions in the UAE.
              </p>
              <div className="text-[#006217] font-black font-headline text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Blogs <ArrowRight size={14} />
              </div>
            </Link>

            {/* Download Center */}
            <Link href="/resources/download-center" className="group bg-[#006217]/5 p-8 rounded-2xl border border-[#006217]/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start">
              <div className="w-12 h-12 bg-[#006217]/10 rounded-lg flex items-center justify-center mb-6 text-[#006217]">
                <Download size={24} />
              </div>
              <h3 className="text-xl font-black text-[#006217] font-headline mb-4">Download Center</h3>
              <p className="text-muted-foreground font-medium mb-6 text-sm leading-relaxed">
                Access brochures, technical specs, product catalogs, and datasheets for all our sanitation and cabin ranges.
              </p>
              <div className="text-[#006217] font-black font-headline text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                View Downloads <ArrowRight size={14} />
              </div>
            </Link>

            {/* Events */}
            <Link href="/resources/events" className="group bg-[#006217]/5 p-8 rounded-2xl border border-[#006217]/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start">
              <div className="w-12 h-12 bg-[#006217]/10 rounded-lg flex items-center justify-center mb-6 text-[#006217]">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-black text-[#006217] font-headline mb-4">Events</h3>
              <p className="text-muted-foreground font-medium mb-6 text-sm leading-relaxed">
                Stay updated with Kazema’s participation in exhibitions, trade shows, and major industry events across the region.
              </p>
              <div className="text-[#006217] font-black font-headline text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                View Events <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED RESOURCES HEADING */}
      <section className="pt-10 pb-6 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative">
            <h2 className="text-3xl font-black font-headline text-[#006217] tracking-tight mb-2">Featured Resources</h2>
            <div className="w-16 h-1 bg-[#006217] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID (MATCHING SCREENSHOT) */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* LARGE CARD (Top Left) */}
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden h-[450px] group shadow-lg">
              <Image 
                src="https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp" 
                alt="Sanitation Standards"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 md:p-12 w-full">
                <span className="bg-[#006217] text-white text-[10px] font-black px-4 py-1.5 rounded uppercase tracking-widest mb-4 inline-block">Insights</span>
                <h3 className="text-3xl md:text-4xl font-black text-white font-headline mb-4 tracking-tight leading-tight">
                  Sanitation Standards for 2026 Mega-Events in Dubai
                </h3>
                <p className="text-white/70 text-sm font-medium mb-8 max-w-xl">
                  How we're evolving modular sanitation to meet the demands of global hospitality and event standards.
                </p>
                <Link href="/resources/blogs/sanitation-standards" className="bg-white text-on-surface px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#006217] hover:text-white transition-all shadow-xl active:scale-95 inline-block">
                  Read More
                </Link>
              </div>
            </div>

            {/* SMALL CARD (Top Right) */}
            <div className="md:col-span-4 bg-[#006217]/5 rounded-3xl overflow-hidden shadow-md border border-[#006217]/10 group">
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp" 
                  alt="ROI Portable Units"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-[#006217] text-[10px] font-black uppercase tracking-widest mb-3 block">Technical</span>
                <h3 className="text-lg font-black text-[#006217] font-headline mb-8 tracking-tight italic">
                  Maximizing ROI on Portable Units
                </h3>
                <Link href="/resources/blogs/roi-portable" className="text-[#006217] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* SMALL CARD (Bottom Left) */}
            <div className="md:col-span-4 bg-[#006217]/5 rounded-3xl overflow-hidden shadow-md border border-[#006217]/10 group order-last md:order-0">
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp" 
                  alt="Modular Solutions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-[#006217] text-[10px] font-black uppercase tracking-widest mb-3 block">Case Study</span>
                <h3 className="text-lg font-black text-[#006217] font-headline mb-8 tracking-tight italic">
                  Modular Solutions for Remote Oil & Gas Fields
                </h3>
                <Link href="/resources/blogs/modular-solutions-remote" className="text-[#006217] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* DARK PLATE CARD (Bottom Right) */}
            <div className="md:col-span-8 bg-[#3d4b53] rounded-3xl p-10 md:p-14 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings size={220} strokeWidth={1} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center h-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">Specification Plate</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white font-headline mb-6 tracking-tighter italic leading-none">
                  Eco-Series 2026 <br /> Tech Datasheet
                </h3>
                <p className="text-white/60 text-sm font-medium mb-10 max-w-lg leading-relaxed">
                  Complete engineering breakdown of our new self-sustaining water filtration systems for portable units.
                </p>
                <button className="bg-[#006217] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#005213] transition-all flex items-center gap-3 shadow-2xl active:scale-95">
                  <Download size={18} /> Download PDF Catalog
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (MATCHING SCREENSHOT) */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-[#006217] to-[#004210] p-12 md:p-20 shadow-2xl text-white">
            <div className="absolute inset-0 blueprint-pattern opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black font-headline mb-6 tracking-tighter leading-none">
                  Need Help Choosing the <br className="hidden md:block" /> Right Solution?
                </h2>
                <p className="text-white/80 font-medium text-base italic">
                  Contact Kazema for expert guidance on portable sanitation and modular units. Our consultants are ready to assist.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto shrink-0">
                <Link 
                  href="/get-a-quote"
                  className="bg-white text-[#006217] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:scale-105 transition-all shadow-black/20 text-center"
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/contact-us"
                  className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
