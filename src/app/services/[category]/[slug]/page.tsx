"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Filter,
  Star,
  Download,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ShoppingCart,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Truck
} from "lucide-react";
import Card from "@/components/card";

// Specific service categories
const CATEGORIES = [
  "All Services",
  "Rental Toilets",
  "Handwash Stations",
];

// Mock data to hydrate the UI smoothly
const MOCK_GALLERY = [
  "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLhFy2mg-eQMjbEwZCmvPYJP4e1JxjmzqraVNw2lR-y__EJZjeMfK7RbJTE5B21hABRuYMTVNHiYcMNima4EwzBv7skR6BO_I4ZUmVpN3AEp6MYbd8dfExa6cC6y2ysRiwpd-02fV4cbLfTNGCm6xqCwIhAWAjuV0vU_pGQYEKP1Xf9vtllUV1utt_ay9vHWKBHu4bgna0urKi6whvVEyunXheFHbuy9MUEJB8QC9FwTFGLgE6r2O1vd7g3NKaFsHGtbcZhm5c4SQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlLhl14KsIAQvP6Zw9xniPiii2fq-qSVCaJD40fNGzGCO82-dr36c26xLF7vQRAfBuJB0aFTltOPFajoTSAO_YlegS48rkjDcjEYGBsCaYxeLeqHC1BNu199AN4pOn4KUo6VhEtwL4H7bUZRsbAwpvm6CmPgXOAKmb_9_dIz8H71DbJVJ406IVVmXaLw4jgWw7GLXJ7XIi0nlJDkNipBDVMC85QdteYKClBgtDLjr3SCDnP9CQaSIJJ53bijwSGalZGOYXyXwOm5w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtERCrrqcoxCFNAGiel9BZNKvgSW5tPp6gBicFV4RJ1QHNMi22wYUhLw_TfBwXoZZffMoFFkCzgE-Hls3SU1XwPTZ8bS79rF95Wup6R5Fq9nj8P0GJYPC27xbdCVa36rJqijTettRy2GsJzr9J68CQmeZK9ihiOJhoZ9DkpgnDAUR9kNSI7oLv6t6XEG-KY2od_9X1m1KApTIcTWxlY5WzlGw_kHUHXJgMoPKY2VagKFFibloMKq395dDANBQLQ5M9jl9N0AX1V_g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCg90QgDuXQZ1VIf5kBQ1Uif7CPoZVw_DLnA9y8XFups1EwSjbcP7E8OlCBx_8raZ5MLxO3pC49D-wnAIS7aeK0XR7VdAqvSzEO3vridyt6t_fKCmgNltN0pmfB6YFrWFGi43G3qFhTFJs_bitpozo2jYQcMMw58JGw1s-4SJ0zp04f8gSmAeJzg7X6Pu1xgsA48hzTXtBOyZu3MbUzK4dzSFA97hvh73WV7t2bgD1_6vxe2yTCGDpqka2sX30WA42otd0v5dWSLZw"
];

const RELATED_SERVICES = [
  {
    id: 1,
    title: "Eco Standard Rental",
    description: "Reliable foundational sanitation unit for construction and remote deployment.",
    image: MOCK_GALLERY[0],
    tag: "Rental Toilets"
  },
  {
    id: 2,
    title: "Premium VIP Restroom",
    description: "Multi-stall premium trailer setup designed for high-profile events.",
    image: MOCK_GALLERY[1],
    tag: "Rental Toilets"
  },
  {
    id: 3,
    title: "Disabled Access Rental",
    description: "Wheelchair accessible portable unit conforming to international safety standards.",
    image: MOCK_GALLERY[2],
    tag: "Rental Toilets"
  }
];

export default function SingleServicePage() {
  const params = useParams();
  const router = useRouter();

  const [activeImage, setActiveImage] = useState(MOCK_GALLERY[0]);

  // Clean strings from the URL 
  const categoryStr = params.category ? String(params.category).replace(/-/g, " ") : "Category";
  const titleStr = params.slug ? String(params.slug).replace(/-/g, " ") : "Service Details";

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen bg-background text-foreground font-body">

      {/* Sticky Back Navigation Action */}
      <div className="sticky top-16 z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-background/0 backdrop-blur-[2px] pointer-events-none mb-4">
        <button
          onClick={() => router.push('/services')}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background dark:bg-card hover:bg-white dark:hover:bg-muted/40 hover:border-[#006217]/30 hover:text-[#006217] transition-all duration-500 text-xs font-black uppercase tracking-widest shadow-lg pointer-events-auto"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-500" />
          Back to Service Catalog
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 relative">

        {/* Left Sidebar Layout */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-6 hidden md:block">
          <div className="flex items-center gap-2 mb-6 text-foreground font-semibold">
            <Filter className="w-5 h-5 text-[#006217] dark:text-[#28a745]" />
            <span className="text-lg tracking-tight">Service Categories</span>
          </div>

          <ul className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = categoryStr.toLowerCase() === cat.toLowerCase() ||
                (categoryStr.toLowerCase() === 'rental toilets' && cat === 'Rental Toilets');
              return (
                <li key={cat}>
                  <Link
                    href={cat === "All Services" ? "/services" : `/services/${cat.toLowerCase().replace(/ /g, "-")}`}
                    className={`w-full flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 border ${isActive
                        ? "bg-[#006217] text-white border-[#006217] dark:bg-[#28a745] dark:border-[#28a745] dark:text-black shadow-md translate-x-1"
                        : "bg-muted/30 text-muted-foreground border-transparent hover:bg-muted/80 hover:text-foreground"
                      }`}
                  >
                    <span className="truncate">{cat}</span>
                    <ChevronRight size={16} className={isActive ? "opacity-100" : "opacity-0 text-muted-foreground"} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main Content Area */}
        <section className="w-full lg:w-3/4">

          {/* Hero UI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-stretch">

            {/* Left Column: Imagery & Resources Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md">
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden group bg-muted/20 cursor-pointer">
                  <Image
                    src={activeImage}
                    alt="Service Main Image"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    {MOCK_GALLERY.indexOf(activeImage) + 1} / {MOCK_GALLERY.length}
                  </div>
                </div>

                {/* Image Gallery Slider */}
                <div className="relative flex items-center group/slider w-full">
                  <button
                    onClick={() => {
                      const currentIndex = MOCK_GALLERY.indexOf(activeImage);
                      const prevIndex = currentIndex === 0 ? MOCK_GALLERY.length - 1 : currentIndex - 1;
                      setActiveImage(MOCK_GALLERY[prevIndex]);
                    }}
                    className="absolute -left-4 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-black border border-border rounded-full shadow-md text-foreground opacity-100 hover:scale-110 transition-all sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full py-1 snap-x justify-between">
                    {MOCK_GALLERY.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-[18%] aspect-square rounded-lg overflow-hidden border-2 transition-all shrink-0 snap-start ${activeImage === img ? "border-[#006217] dark:border-[#28a745]" : "border-transparent opacity-80 hover:opacity-100"
                          }`}
                      >
                        <Image src={img} alt={`Gallery Thumb ${idx}`} fill className="object-cover" sizes="100px" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const currentIndex = MOCK_GALLERY.indexOf(activeImage);
                      const nextIndex = currentIndex === MOCK_GALLERY.length - 1 ? 0 : currentIndex + 1;
                      setActiveImage(MOCK_GALLERY[nextIndex]);
                    }}
                    className="absolute -right-4 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-black border border-border rounded-full shadow-md text-foreground opacity-100 hover:scale-110 transition-all sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Utility Buttons */}
              <div className="flex gap-3 pt-6">
                <button className="flex-1 flex items-center justify-center bg-black hover:bg-black/90 text-white font-bold text-[8px] sm:text-[9px] uppercase tracking-wide rounded-xl py-4 transition-all active:scale-[0.98] cursor-pointer">
                  Service Terms
                </button>
                <button className="flex-1 flex items-center justify-center bg-black hover:bg-black/90 text-white font-bold text-[8px] sm:text-[9px] uppercase tracking-wide rounded-xl py-4 transition-all active:scale-[0.98] cursor-pointer">
                  Service Schedule
                </button>
              </div>
            </div>

            {/* Right Column: Information & CTAs Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md">

              <div>
                {/* Product Review Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-[#006217] text-[#006217] dark:fill-[#28a745] dark:text-[#28a745]" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-muted-foreground">(94 Recommendations)</span>
                </div>

                {/* Interactive Title */}
                <h1 className="text-xl md:text-2xl font-headline font-black text-foreground capitalize leading-tight mb-3 tracking-tight">
                  {titleStr}
                </h1>

                {/* Short Description */}
                <p className="text-muted-foreground text-[14px] mb-6 leading-relaxed font-body">
                  Top-of-the-line service deployment guaranteeing swift transport, rigorous sanitation schedules, and robust hygiene maintenance ensuring unparalleled reliability across your entire operational timeline.
                </p>
              </div>

              {/* Call To Actions & Features */}
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2">
                    <button className="flex-[1.2] bg-[#006217] text-white h-9 rounded-lg font-bold uppercase tracking-widest text-[9px] sm:text-[10px] hover:opacity-90 transition-all flex items-center justify-center gap-1.5 group/quote transition-transform active:scale-[0.98] cursor-pointer">
                      <ShoppingCart size={14} className="transition-transform duration-300 group-hover/quote:scale-110 group-hover/quote:-rotate-12" />
                      Book Service
                    </button>

                    <button className="flex-1 bg-white border border-[#006217] text-[#006217] h-9 rounded-lg font-bold uppercase tracking-widest text-[9px] sm:text-[10px] transition-all flex items-center justify-center gap-1.5 group/wa hover:bg-[#006217]/5 active:scale-[0.98] cursor-pointer">
                      WhatsApp
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/wa:scale-110 group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5" />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button className="text-[10px] font-bold text-muted-foreground hover:text-[#006217] transition-colors flex items-center gap-2 group/pdf cursor-pointer">
                      <Download size={12} className="group-hover/pdf:translate-y-0.5 transition-transform" />
                      Download Service Brochure
                    </button>
                  </div>
                </div>

                {/* Features Highlights Card */}
                <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                  <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Kazema Service Guarantee</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <ShieldCheck size={14} className="text-[#006217] shrink-0 mt-0.5" />
                      <span>Certified Quality Compliance Standard</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Wrench size={14} className="text-[#006217] shrink-0 mt-0.5" />
                      <span>Comprehensive On-Site Maintenance</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Truck size={14} className="text-[#006217] shrink-0 mt-0.5" />
                      <span>Prompt Delivery & Installation included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Tabs Section */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-headline mb-6 text-foreground border-b border-border/60 pb-3">Service Level Details</h3>
            
            <div className="space-y-6 text-[14px] text-muted-foreground leading-relaxed font-body">
              <p>
                Our <strong>{titleStr}</strong> service is tailored to deliver maximum efficiency and hygiene compliance for long-term deployments. 
                Whether organizing a major event or managing an extended construction project, our dedicated team ensures your sanitation infrastructure remains pristine.
              </p>
              
              <div className="mt-8 bg-muted/20 border border-border/60 rounded-xl overflow-hidden text-sm">
                 <table className="w-full text-left">
                   <tbody>
                     <tr className="border-b border-border/60"><th className="py-3 px-4 font-bold bg-muted/30 text-foreground w-1/3">Included Frequency</th><td className="py-3 px-4 text-foreground">Weekly / Bi-Weekly Schedules</td></tr>
                     <tr className="border-b border-border/60"><th className="py-3 px-4 font-bold bg-muted/30 text-foreground w-1/3">Support Coverage</th><td className="py-3 px-4 text-foreground">24/7 Emergency Dispatch Available</td></tr>
                     <tr className="border-b border-border/60"><th className="py-3 px-4 font-bold bg-muted/30 text-foreground w-1/3">Material Delivery</th><td className="py-3 px-4 text-foreground">Consumables completely restocked during maintenance</td></tr>
                     <tr><th className="py-3 px-4 font-bold bg-muted/30 text-foreground w-1/3">Fleet Reach</th><td className="py-3 px-4 text-foreground">UAE Wide (Dubai, Sharjah, Abu Dhabi, etc.)</td></tr>
                   </tbody>
                 </table>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-headline mb-8 text-foreground tracking-tight">You might also require</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {RELATED_SERVICES.map((related) => {
                 const catSlugStr = related.tag.toLowerCase().replace(/ /g, "-");
                 const itemSlugStr = related.title.toLowerCase().replace(/ /g, "-");
                 const redirectHref = `/services/${catSlugStr}/${itemSlugStr}`;

                 return (
                  <div key={related.id} className="h-full">
                    <Card
                      title={related.title}
                      description={related.description}
                      image={related.image}
                      tag={related.tag}
                      href={redirectHref}
                    />
                  </div>
                 )
              })}
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
