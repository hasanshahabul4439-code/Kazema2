import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Kazema Global",
  description: "Learn more about Kazema Global, your trusted partner in premium modular space solutions.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                        */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-muted/30 pt-20 pb-24 md:pt-32 md:pb-36 border-b border-border/40 min-h-[60vh] flex flex-col justify-center">
        {/* Background Blueprint Pattern */}
        <div className="absolute inset-0 blueprint-pattern opacity-10 dark:opacity-[0.05] -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006217] opacity-5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006217]/10 text-[#006217] dark:bg-[#006217]/20 border border-[#006217]/20 text-xs font-black uppercase tracking-widest shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            Our Story
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl">
            Redefining modular spaces with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006217] to-emerald-500">Intelligent Design</span>.
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Since our foundation, Kazema has been committed to transforming the landscape of portable architecture. We combine rugged durability with modern aesthetics to build structures that adapt to your exact needs.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Button className="bg-[#006217] hover:bg-[#004e12] text-white px-8 py-6 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#006217]/20 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/projects">
                Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. STATS SECTION                                       */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "30+", label: "Years of Excellence", icon: Trophy },
            { value: "10K+", label: "Projects Delivered", icon: CheckCircle2 },
            { value: "15+", label: "Countries Served", icon: Target },
          ].map((stat, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:border-[#006217]/30 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#006217]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006217] transition-all duration-500">
                 <stat.icon className="w-8 h-8 text-[#006217] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 3. CORE VALUES SECTION                                 */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values form the foundation of every cabin we build, every relationship we nurture, and every innovation we bring to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Quality",
                description: "We source the finest materials and employ rigorous quality control to ensure every unit stands the test of time and harsh environments.",
                icon: ShieldCheck
              },
              {
                title: "Relentless Innovation",
                description: "We constantly refine our manufacturing processes and design language to stay at the cutting edge of modular space solutions.",
                icon: Zap
              },
              {
                title: "Client-Centricity",
                description: "Your operational success is our priority. We design adaptable solutions tailored to your unique workforce and project requirements.",
                icon: Users
              }
            ].map((value, i) => (
              <div key={i} className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#006217]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#006217]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 4. CTA / CONTACT TRIGGER                               */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden flex flex-col items-center text-center px-6">
         {/* Background gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#006217]/5 -z-10" />
         
         <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 max-w-2xl">
           Ready to Deploy Your Next Modular Strategy?
         </h2>
         <p className="text-muted-foreground text-lg mb-10 max-w-xl">
           Connect with our engineering team today to architect the perfect mobile infrastructure for your upcoming project.
         </p>
         
         <Button className="bg-foreground hover:bg-black text-background px-10 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-200" asChild>
           <Link href="/support/contact-us">
             Partner With Kazema
           </Link>
         </Button>
      </section>

    </main>
  );
}
