import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  titleBlack: string;
  titleGreen: string;
  description: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  imageSrc?: string;
}

export default function HeroSection({
  titleBlack = "Blocks built ",
  titleGreen = "with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  primaryBtnText = "Sign Up",
  secondaryBtnText = "Get Started",
  imageSrc = "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
}: HeroSectionProps) {
  return (
    <section className="relative w-full py-10 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Text & Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          {/* Leading Manufacturer Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#006217]/10 dark:bg-[#28a745]/10 border border-[#006217]/20 dark:border-[#28a745]/20 mb-6 text-[#006217] dark:text-[#28a745] text-sm font-semibold shadow-sm overflow-hidden relative group">
            {/* Shimmer effect for the badge */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <Award className="w-4 h-4" />
            Leading Manufacturer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">{titleBlack}</span>
            <br className="hidden lg:block" />
            <span className="text-[#006217] dark:text-[#28a745]">{titleGreen}</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="bg-[#006217] hover:bg-[#004e12] text-white dark:bg-[#006217] dark:hover:bg-[#00811e] rounded-md px-8 py-6 text-sm font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-300">
              {primaryBtnText}
            </Button>
            <Button variant="outline" className="border-[#006217] text-[#006217] hover:bg-[#006217] hover:text-white dark:border-[#28a745] dark:text-[#28a745] dark:hover:bg-[#28a745] dark:hover:text-black rounded-md px-8 py-6 text-sm font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
              {secondaryBtnText}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[550px] group border border-border/50 hover:border-[#006217]/30 transition-colors duration-500">
          <Image
            src={imageSrc}
            alt="Hero Image"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
