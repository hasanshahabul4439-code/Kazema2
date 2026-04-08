import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2, Factory, Flag, Hammer, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Story | Kazema Global",
  description: "From a small trading setup to state-of-the-art manufacturing facilities. Discover the journey of Kazema Global.",
};

const timelineEvents = [
  {
    year: "2011",
    title: "Foundation & Vision",
    description: "Kazema General Trading LLC began its journey in Ajman, focusing on providing high-quality portable toilets across the UAE. Our dedication to hygiene, reliability, and customer satisfaction quickly made us a trusted name in the industry.",
    icon: Flag,
  },
  {
    year: "2014",
    title: "Manufacturing Initiation",
    description: "We took a major step forward by starting our own manufacturing of portable toilets, allowing us to maintain strict quality standards and deliver products that perfectly met our clients' needs.",
    icon: Hammer,
  },
  {
    year: "2016",
    title: "Custom Solutions Expansion",
    description: "We expanded into custom-built toilets, offering tailored solutions for private villas, events, and industrial sites, bringing innovation and flexibility to every project.",
    icon: Building2,
  },
  {
    year: "2017",
    title: "Diversifying Operations",
    description: "We broadened our product range further, introducing container toilets and security cabins, serving a wider market with diverse portable and modular solutions.",
    icon: Truck,
  },
  {
    year: "2022",
    title: "The Industrial Leap",
    description: "A transformative milestone: we established a new manufacturing yard in Umm Al Quwain, a full-time production facility where we now build offsite construction units, including office porta cabins, GRP toilets, and a variety of modular buildings, all designed for durability, functionality, and modern standards.",
    icon: Factory,
  },
  {
    year: "2025",
    title: "Scaling Innovation",
    description: "Continuing our growth, at the end of 2025, we launched another specialized manufacturing facility in Umm Al Quwain, dedicated solely to pod manufacturing, expanding our capabilities in innovative modular solutions.",
    icon: MapPin,
  },
];

export default function OurStoryPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                        */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-muted/30 pt-20 pb-16 md:pt-32 md:pb-24 border-b border-border/40 flex flex-col justify-center">
        {/* Background Blueprint Pattern */}
        <div className="absolute inset-0 blueprint-pattern opacity-10 dark:opacity-[0.05] -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006217] opacity-5 blur-[100px] rounded-full translate-x-1/2 -z-10" />

        <div className="max-w-5xl mx-auto px-6 w-full space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative z-10 text-center">
          <Link href="/about-us" className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-[#006217] uppercase tracking-widest transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            The Journey of <span className="text-[#006217]">Kazema</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            From a small general trading setup to multiple state-of-the-art manufacturing facilities, our growth is fueled by a vision to provide reliable, innovative, and high-quality modular solutions across the UAE and beyond.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. TIMELINE SECTION                                      */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative border-l-2 border-[#006217]/20 ml-6 md:ml-12 space-y-16">
            
            {/* Glowing line overlay */}
            <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#006217] via-[#006217]/50 to-transparent shadow-[0_0_15px_rgba(0,98,23,0.5)] origin-top animate-line-grow" />

            {timelineEvents.map((event, index) => (
              <div 
                key={event.year} 
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-[-25px] top-1 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-[#006217] shadow-xl group-hover:scale-110 group-hover:shadow-[#006217]/40 transition-all duration-300">
                  <event.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#006217]/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                    <h2 className="text-[#006217] text-3xl md:text-5xl font-black tracking-tighter">
                      {event.year}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {event.description}
                  </p>
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
          Be Part of Our Future
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          We invite you to experience the quality, reliability, and innovation that defines our legacy in modular space solutions.
        </p>
        <Button className="bg-[#006217] hover:bg-[#004e12] text-white px-10 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all hover:-translate-y-1" asChild>
          <Link href="/projects">
            View Our Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
