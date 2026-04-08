"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/card";
import { LayoutGrid, Filter } from "lucide-react";

const CATEGORIES = [
  "All Services",
  "Rental Toilets",
  "Handwash Stations",
];

// Fallback high-quality generic image
const MOCK_IMAGE = "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp";

const MOCK_SERVICES = [
  {
    id: 1,
    title: "Event Portable Toilet Rental",
    description: "Premium sanitary toilet units specifically designed and serviced for large public gatherings and corporate events.",
    image: MOCK_IMAGE,
    tag: "Rental Toilets",
    location: "UAE Wide",
  },
  {
    id: 2,
    title: "Construction Site Commode",
    description: "Rugged and durable portable toilet rentals engineered for harsh industrial and construction environments.",
    image: MOCK_IMAGE,
    tag: "Rental Toilets",
    location: "Dubai",
  },
  {
    id: 3,
    title: "VIP Restroom Trailer Rental",
    description: "Luxury multi-stall rest trailers offering domestic-style comfort complete with flushing systems and mirrors.",
    image: MOCK_IMAGE,
    tag: "Rental Toilets",
    location: "Abu Dhabi",
  },
  {
    id: 4,
    title: "Standalone Handwash Sink",
    description: "Compact single-user hand hygiene stations built to meet immediate health and safety requirements on remote sites.",
    image: MOCK_IMAGE,
    tag: "Handwash Stations",
    location: "Sharjah",
  },
  {
    id: 5,
    title: "High-Capacity Multi-Tap Station",
    description: "Freestanding commercial hand hygiene station featuring multiple sinks, soap dispensers, and hands-free operation.",
    image: MOCK_IMAGE,
    tag: "Handwash Stations",
    location: "Events",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  // Filter services based on selected category
  const filteredServices =
    activeCategory === "All Services"
      ? MOCK_SERVICES
      : MOCK_SERVICES.filter((service) => service.tag === activeCategory);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen">

      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Kazema <span className="text-[#006217] dark:text-[#28a745]">Service Catalog</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Explore our extensive range of high-quality, durable modular rental units and sanitary services designed for performance and reliability across any sector.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 relative">

        {/* Left Sidebar Layout */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center gap-2 mb-6 text-foreground font-semibold">
            <Filter className="w-5 h-5 text-[#006217] dark:text-[#28a745]" />
            <span className="text-lg tracking-tight">Service Categories</span>
          </div>

          {/* Mobile Category Scroll / Desktop Category List */}
          <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x">
            {CATEGORIES.map((cat) => {
              const count = cat === "All Services"
                ? MOCK_SERVICES.length
                : MOCK_SERVICES.filter(p => p.tag === cat).length;

              return (
                <li key={cat} className="snap-start shrink-0">
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 border ${activeCategory === cat
                      ? "bg-[#006217] text-white border-[#006217] dark:bg-[#28a745] dark:border-[#28a745] dark:text-black shadow-md translate-x-1"
                      : "bg-muted/30 text-muted-foreground border-transparent hover:bg-muted/80 hover:text-foreground"
                      }`}
                  >
                    <span className="truncate">{cat}</span>
                    <span className={`flex-shrink-0 inline-flex items-center justify-center min-w-[1.75rem] h-6 px-1 text-[10px] font-bold rounded-md border transition-colors duration-300 ${activeCategory === cat
                      ? "bg-white/20 border-white/20 text-white dark:bg-black/10 dark:border-black/10 dark:text-black"
                      : "bg-background/50 border-border/50 text-muted-foreground"
                      }`}>
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right Catalog Grid Layout */}
        <section className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 opacity-60" />
              {activeCategory}
            </h2>
            <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50">
              {filteredServices.length} Items
            </span>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                // Dynamically build URL slugs utilizing hyphenation
                const catSlug = service.tag.toLowerCase().replace(/ /g, "-");
                const itemSlug = service.title.toLowerCase().replace(/ /g, "-");
                const dynamicHref = `/services/${catSlug}/${itemSlug}`;

                return (
                  <div key={service.id} className="animate-in fade-in zoom-in-95 duration-500 h-full">
                    <Card
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      tag={service.tag}
                      href={dynamicHref}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center border border-dashed rounded-xl border-border bg-muted/10">
              <p className="text-lg font-medium text-muted-foreground">No services found for this category.</p>
              <button
                onClick={() => setActiveCategory("All Services")}
                className="mt-6 text-[#006217] dark:text-[#28a745] font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
