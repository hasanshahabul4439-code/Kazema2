import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, FileCheck, Globe, Medal, Microscope, Search, ShieldCheck, ThumbsUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Certifications | Kazema Global",
  description: "Explore Kazema's certified excellence in portable sanitation and modular solutions across the UAE.",
};

const certifications = [
  {
    logo: Award,
    name: "ISO 9001:2015",
    desc: "Quality Management Systems standard ensuring consistent product quality and customer satisfaction.",
  },
  {
    logo: Medal,
    name: "ISO 14001:2015",
    desc: "Environmental Management Systems standard emphasizing our commitment to sustainable practices.",
  },
  {
    logo: ShieldCheck,
    name: "ISO 45001:2018",
    desc: "Occupational Health & Safety ensuring the highest safety standards in our manufacturing processes.",
  },
  {
    logo: FileCheck,
    name: "UAE Local Compliance",
    desc: "Adherence to strict municipal and regional construction and sanitation regulations.",
  }
];

const whyItMatters = [
  { text: "Ensures high product quality", icon: CheckCircle2 },
  { text: "Improves safety standards", icon: ShieldCheck },
  { text: "Builds customer trust", icon: ThumbsUp },
  { text: "Ensures compliance with UAE regulations", icon: FileCheck },
  { text: "Guarantees consistent manufacturing", icon: Wrench },
  { text: "Supports long-term durability", icon: Award },
];

const qaProcess = [
  "Raw material inspection",
  "Manufacturing quality control",
  "Structural testing",
  "Leak & hygiene testing",
  "Final inspection",
  "Delivery approval"
];

export default function CertificationsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                        */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-muted/30 pt-20 pb-24 md:pt-32 md:pb-32 border-b border-border/40 min-h-[60vh] flex flex-col justify-center text-center">
        <div className="absolute inset-0 blueprint-pattern opacity-10 dark:opacity-[0.05] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#006217] opacity-5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto px-6 w-full space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 relative z-10">
          <Link href="/about-us" className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-[#006217] uppercase tracking-widest transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            Certifications & <br/><span className="text-[#006217] relative inline-block">Quality Compliance
              {/* Trust badges floating near hero */}
              <div className="absolute -top-6 -right-12 hidden md:flex w-12 h-12 rounded-full bg-[#006217] text-white items-center justify-center shadow-2xl rotate-12 animate-pulse">
                <Award className="w-6 h-6" />
              </div>
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium mt-6">
            Certified Excellence in Portable Sanitation & Modular Solutions Across the UAE
          </p>

          <Button className="mt-8 bg-transparent text-[#006217] hover:bg-[#006217]/5 border-2 border-[#006217] px-8 py-6 rounded-xl font-bold uppercase tracking-widest text-xs transition-all" asChild>
            <Link href="#showcase">
              Explore Our Standards <ArrowLeft className="ml-2 w-4 h-4 rotate-270" style={{transform: "rotate(-90deg)"}} />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. INTRODUCTION SECTION                                  */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              A Global Standard of Quality
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Kazema, our commitment to international standards is unwavering. We adhere to the strictest compliance regulations for safety, durability, and hygiene to deliver modular spaces that truly stand the test of time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our products are engineered to perfectly align with both local UAE regulatory expectations and broader global manufacturing requirements, ensuring maximum reliability.
            </p>
          </div>
          {/* Generic placeholder utilizing styling instead of raw image */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted/40 rounded-3xl border border-border shadow-inner overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 blueprint-pattern opacity-20 dark:opacity-10" />
            <Globe className="w-32 h-32 text-muted-foreground/30 relative z-10" />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 3. CERTIFICATIONS SHOWCASE                               */}
      {/* ───────────────────────────────────────────────────────── */}
      <section id="showcase" className="py-24 bg-muted/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Official Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-background border border-border rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#006217]/40 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-[#006217]/10 flex items-center justify-center mb-6">
                  <cert.logo className="w-10 h-10 text-[#006217]" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{cert.name}</h3>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">{cert.desc}</p>
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-widest border-border hover:bg-[#006217]/5 hover:text-[#006217] hover:border-[#006217]/30" asChild>
                  <Link href="#">View Certificate</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 4 & 6. WHY MATTERS + COMPLIANCE (Split Layout)         */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Why it matters */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Why Certifications Matter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItMatters.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-muted/30 p-4 rounded-xl border border-border/50">
                  <item.icon className="w-6 h-6 text-[#006217] shrink-0" />
                  <span className="font-bold text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Compliance Overview */}
          <div className="space-y-8 bg-[#006217]/5 p-10 rounded-[2.5rem] border border-[#006217]/20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#006217]">
              Compliance & Standards
            </h2>
            <ul className="space-y-6">
              {[
                "Adherence to strict UAE structural regulations",
                "International manufacturing design standards",
                "Strict internal QC evaluation procedures",
                "Environment-friendly operational practices"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#006217] shrink-0" />
                  <span className="text-lg font-medium text-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 5. QUALITY ASSURANCE PROCESS                             */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Quality Assurance Process
            </h2>
            <p className="text-muted-foreground text-lg">Rigorous tracking from inception to delivery.</p>
          </div>

          <div className="relative border-l-2 border-[#006217]/20 ml-6 md:ml-12 space-y-12">
            {qaProcess.map((stepTitle, index) => (
              <div key={index} className="relative pl-10 md:pl-16 group">
                <div className="absolute left-[-22px] top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-[#006217] shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,98,23,0.4)] transition-all duration-300">
                  <Microscope className="w-4 h-4 text-white" />
                </div>
                <div className="bg-background border border-border px-8 py-5 rounded-2xl shadow-sm hover:shadow-lg transition-all group-hover:-translate-y-1 group-hover:border-[#006217]/30">
                  <h3 className="text-xl font-bold text-foreground">
                    <span className="text-[#006217] mr-2">{"0" + (index + 1) + "."}</span> {stepTitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 7. CERTIFICATIONS GALLERY                                */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Certificate Gallery
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative aspect-[3/4] bg-muted border border-border rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-[#006217]/50 transition-colors">
                <div className="absolute inset-0 bg-background/50 grid place-items-center opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all z-10">
                  <Search className="w-8 h-8 text-[#006217]" />
                </div>
                <FileCheck className="w-16 h-16 text-muted-foreground/30 relative z-0" />
                <div className="absolute bottom-4 left-0 w-full text-center">
                   <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Document</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 8 & 10. TRUST CTA & CLOSING                            */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden flex flex-col items-center text-center px-6 bg-[#006217]">
         <div className="absolute inset-0 blueprint-pattern opacity-10" />
         
         <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 max-w-3xl relative z-10">
           Build With Guaranteed Confidence
         </h2>
         <p className="text-white/80 text-lg mb-4 max-w-2xl relative z-10">
           At Kazema, our certifications reflect our dedication to quality, safety, and excellence. Every product is built to meet the highest industry standards and exceed customer expectations.
         </p>
         
         <div className="flex flex-col sm:flex-row gap-4 mt-10 relative z-10">
           <Button className="bg-white hover:bg-gray-100 text-[#006217] px-8 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
             <Link href="/support/contact-us">
               Request a Quote
             </Link>
           </Button>
           <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
             <Link href="/support/contact-us">
               Contact Us <ArrowUpRight className="ml-2 w-4 h-4" />
             </Link>
           </Button>
         </div>
      </section>

    </main>
  );
}
