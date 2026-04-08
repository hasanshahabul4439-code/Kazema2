import Card from "@/components/card";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { CheckCircle } from "lucide-react";
import CounterStats from "@/components/CounterStats";
import ProductSection from "@/components/ProductSection";
import OurClients from "@/components/OurClients";
import BlogSection from "@/components/BlogSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  const cards = [
    {
      title: "Portable Toilet Setup for Luxury Yacht Event",
      description:
        "High-end portable toilet setups delivering premium sanitation for luxury events and maritime gatherings.",
      image:
        "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
      tag: "Sanitation",
      location: "Dubai",
      date: "Feb 2026",
      slug: "luxury-yacht-event"
    },
    {
      title: "Elevating Modern Urban Jungle Lifestyles",
      description:
        "Transforming concrete spaces into lush green sanctuaries with tropical plants.",
      image:
        "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
      tag: "Urban Edit",
      location: "Sharjah",
      date: "Mar 2026",
      slug: "urban-jungle-lifestyles"
    },
    {
      title: "Curating Restorative Zen Garden Spaces",
      description:
        "Design calming environments with minimalist greenery and natural balance.",
      image:
        "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
      tag: "Mindfulness",
      location: "Abu Dhabi",
      date: "Apr 2026",
      slug: "zen-garden-spaces"
    },
  ];
  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4">
      <HeroSection
        titleBlack="Kazema Built for Every Space, "
        titleGreen="Designed for Real-World Use."
        description="Kazema delivers durable, high-quality modular solutions engineered for flexibility and performance. From portable toilets to cabins, our products are built to meet the rigorous demands of construction sites, events, and remote locations across the UAE."
        primaryBtnText="Get Quote"
        secondaryBtnText="Explore Products"
        imageSrc="https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp"
      />

      <div className="flex flex-col w-full mt-10">
        {/* Other sections */}
        <section className="w-full">
          <SectionHeader
            title="What We’ve Built"
            description="Every project reflects our commitment to quality, innovation, and unmatched reliability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <Card key={index} {...card} href={`/projects/${card.slug}`} />
            ))}
          </div>
        </section>

        {/* About Section - Empowering Communities */}
        <section className="py-10 md:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col gap-6">
            <span className="text-muted-foreground font-semibold tracking-wider text-sm md:text-base">
              About us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Empowering Communities Together
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[90%]">
              Kazema drives the creation of environments where everyone has the opportunity to thrive. This approach not only promotes individual success but also contributes to the overall resilience and cohesion of society.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "More than 10 years of experience.",
                "Over 100k happy customers and finished projects.",
                "It has 20 branches around the world."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#006217] dark:text-[#28a745]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button className="bg-[#006217] hover:bg-[#004e12] text-white dark:bg-[#006217] dark:hover:bg-[#00811e] px-8 py-6 text-sm sm:text-base font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-max">
                Read More About Us
              </Button>
            </div>
          </div>

          {/* Right Images Column */}
          <div className="flex flex-col gap-4 relative mt-12 lg:mt-0 lg:pl-10">
            {/* Dynamic Counter Widget 1 */}
            <div className="absolute top-[10%] -left-8 md:-left-12 z-10 bg-card border border-border shadow-2xl rounded-lg p-4 md:p-6 flex flex-col items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-3xl md:text-4xl font-extrabold text-[#006217] dark:text-[#28a745]">10+</span>
              <span className="text-xs md:text-sm font-semibold text-muted-foreground whitespace-nowrap">Years Experience</span>
            </div>

            {/* Dynamic Counter Widget 2 */}
            <div className="absolute bottom-[20%] -right-4 md:-right-8 z-10 bg-[#006217] dark:bg-[#28a745] text-white shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold">100k+</span>
              <span className="text-xs md:text-sm font-medium text-green-100 dark:text-green-950 whitespace-nowrap">Finished Projects</span>
            </div>

            {/* Top Grid (2 images side by side) */}
            <div className="grid grid-cols-2 gap-4 h-48 md:h-64">
              <div className="relative rounded-[1rem] overflow-hidden shadow-sm group border border-transparent hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(139,92,246,0.6)] hover:border-cyan-400/50">
                <Image
                  src={"https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp"}
                  alt="Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-[1rem] overflow-hidden shadow-sm group border border-transparent hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(139,92,246,0.6)] hover:border-cyan-400/50">
                <Image
                  src={"https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp"}
                  alt="Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Bottom span image */}
            <div className="relative rounded-[1rem] overflow-hidden h-48 md:h-64 shadow-sm group border border-transparent hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(139,92,246,0.6)] hover:border-cyan-400/50">
              <Image
                src={"https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp"}
                alt="Collaboration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Counter Stats Section */}
        <CounterStats />

        {/* Product Section */}
        <ProductSection />

        {/* Our Clients Section */}
        <OurClients />

        {/* Client Reviews Section (New Slider) */}
        <ReviewSection />

        {/* Blog Section */}
        <BlogSection />

      </div>
    </main>

  );
}
