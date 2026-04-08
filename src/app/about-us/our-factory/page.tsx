import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Factory, Hammer, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Factory | Kazema Global",
  description: "Discover Kazema's state-of-the-art manufacturing facilities in Umm Al Quwain, where quality modular units are brought to life.",
};

const facilities = [
  {
    year: "2022",
    title: "Umm Al Quwain Production Yard",
    description: "This full-time manufacturing facility serves as the backbone of our operations. Here, we produce office porta cabins, GRP toilets, and modular buildings using advanced construction techniques, ensuring durability, functionality, and modern standards.",
    features: ["Office Porta Cabins", "GRP Toilets", "Modular Buildings", "Advanced Construction Tech"],
  },
  {
    year: "2025",
    title: "Pod Manufacturing Facility",
    description: "Dedicated exclusively to modular pod units, this specialized facility allows us to expand our capabilities in innovative modular solutions, meeting growing demand across the UAE and beyond.",
    features: ["Exclusive Pod Manufacturing", "Innovative Modular Solutions", "High-Volume Production", "Scalable Operations"],
  }
];

export default function OurFactoryPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                        */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-muted/30 pt-20 pb-20 md:pt-32 md:pb-32 border-b border-border/40 min-h-[50vh] flex flex-col justify-center">
        {/* Background Blueprint Pattern */}
        <div className="absolute inset-0 blueprint-pattern opacity-10 dark:opacity-[0.05] -z-10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#006217] opacity-5 blur-[100px] rounded-full -translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative z-10 text-center md:text-left">
          <Link href="/about-us" className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-[#006217] uppercase tracking-widest transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
              Quality Starts at the <span className="text-[#006217] inline-flex items-center gap-4">Source <Factory className="w-10 h-10 md:w-16 md:h-16 hidden md:block" /></span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
              At Kazema General Trading LLC, our state-of-the-art manufacturing facilities are designed to combine <span className="font-bold text-foreground">efficiency, precision, and innovation</span>. Our factories are where every portable toilet, cabin, and modular unit is masterfully brought to life.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. ADVANCED MANUFACTURING FACILITIES                     */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Advanced Manufacturing
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our specialized, full-time production hubs powering the UAE's modular demands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {facilities.map((fac, i) => (
              <div 
                key={i} 
                className="bg-card border border-border p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-[#006217]/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col"
              >
                {/* Decorative background number */}
                <div className="absolute -right-8 -top-12 text-[12rem] font-black text-[#006217]/5 group-hover:text-[#006217]/10 transition-colors pointer-events-none select-none">
                  {fac.year}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#006217]/10 flex items-center justify-center mb-8 relative z-10 group-hover:bg-[#006217] group-hover:scale-110 transition-all duration-500">
                  <Hammer className="w-8 h-8 text-[#006217] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 relative z-10 group-hover:text-[#006217] transition-colors">
                  {fac.title} <span className="text-muted-foreground text-xl md:text-2xl font-bold ml-2">({fac.year})</span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-8 relative z-10 flex-grow">
                  {fac.description}
                </p>

                <div className="relative z-10 border-t border-border/50 pt-6 mt-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fac.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 3. CTA SECTION                                         */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-t border-border/40 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6">
          Schedule a Factory Tour
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          See precision engineering firsthand. Contact our team to book a visit to our production facilities in Umm Al Quwain.
        </p>
        <Button className="bg-[#006217] hover:bg-[#004e12] text-white px-10 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all hover:-translate-y-1" asChild>
          <Link href="/support/contact-us">
            Contact Us Now <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
