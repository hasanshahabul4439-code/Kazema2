import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box, ClipboardCheck, Compass, DraftingCompass, ShieldCheck, Wrench, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Manufacturing Process | Kazema Global",
  description: "Learn about Kazema's rigorous 6-step manufacturing process ensuring quality, durability, and precision from concept to delivery.",
};

const processSteps = [
  {
    number: "1",
    title: "Design & Planning",
    description: "Every project begins with a customized design based on client requirements. Our engineers create detailed plans for portable toilets, cabins, container units, or pod solutions, ensuring structural integrity, functionality, and compliance with industry standards.",
    icon: DraftingCompass,
  },
  {
    number: "2",
    title: "Material Selection",
    description: "We use high-quality materials such as GRP (fiberglass), premium steel frameworks, and durable construction boards to ensure longevity, hygiene, and resistance to harsh weather conditions.",
    icon: Compass,
  },
  {
    number: "3",
    title: "Fabrication & Assembly",
    description: "Units are built on robust steel skeletons for maximum stability. Portable toilets and modular cabins are fabricated with GRP panels or cement boards. Components are offsite assembled in our factory to minimize on-site construction time.",
    icon: Wrench,
  },
  {
    number: "4",
    title: "Customization & Finishing",
    description: "Our team adds custom features as per client needs — from luxury interiors, water tanks, and hand wash basins to specialized container modifications. Each unit is polished and finished to maintain high-quality aesthetics and functionality.",
    icon: Box,
  },
  {
    number: "5",
    title: "Quality Control",
    description: "Before leaving the factory, every unit undergoes strict quality checks, including structural integrity, sanitation fittings, and functional testing, ensuring products meet our uncompromising standards.",
    icon: ShieldCheck,
  },
  {
    number: "6",
    title: "Packaging & Dispatch",
    description: "Finished units are carefully prepared for transport, ensuring safe delivery to the client site. Our logistics team coordinates seamless delivery and installation across the UAE, the Middle East, and Africa.",
    icon: ClipboardCheck,
  },
];

export default function ManufacturingProcessPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                        */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-muted/30 pt-20 pb-16 md:pt-32 md:pb-24 border-b border-border/40 min-h-[50vh] flex flex-col justify-center">
        {/* Background Blueprint Pattern */}
        <div className="absolute inset-0 blueprint-pattern opacity-10 dark:opacity-[0.05] -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006217] opacity-5 blur-[120px] rounded-full translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative z-10 text-center">
          <Link href="/about-us" className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-[#006217] uppercase tracking-widest transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            Our <span className="text-[#006217]">Manufacturing Process</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mt-6">
            At Kazema General Trading LLC, our manufacturing process is designed to ensure quality, durability, and precision in every product we deliver. From raw materials to finished units, each step is carefully managed by our skilled team using advanced equipment.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. PROCESS STEPS GRID                                  */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div 
                key={i} 
                className="group relative bg-card border border-border rounded-3xl p-8 pt-12 shadow-sm hover:shadow-2xl hover:border-[#006217]/30 transition-all duration-500 flex flex-col"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#006217] text-white flex items-center justify-center text-xl font-black border-4 border-background shadow-lg group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                  {step.number}
                </div>

                <div className="w-14 h-14 rounded-xl bg-[#006217]/10 flex items-center justify-center mb-6 group-hover:bg-[#006217] transition-colors duration-500">
                  <step.icon className="w-7 h-7 text-[#006217] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
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
          Precision You Can Trust
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          From concept to completion, Kazema’s manufacturing process combines innovation, precision, and quality to deliver portable and modular solutions that stand the test of time.
        </p>
        <Button className="bg-[#006217] hover:bg-[#004e12] text-white px-10 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all hover:-translate-y-1" asChild>
          <Link href="/projects">
            See Our Work <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
