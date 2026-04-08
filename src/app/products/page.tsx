"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/card";
import { LayoutGrid, Filter } from "lucide-react";

const CATEGORIES = [
  "All Products",
  "Portable Toilets",
  "Portable Cabins",
  "Security Cabins",
  "Handwash Stations",
  "Container Conversion",
  "Miscellaneous",
];

// Fallback high-quality generic image if Kazema ones differ easily
const MOCK_IMAGE = "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp";

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Eco Standard Portable Toilet",
    description: "Highly durable standard sanitation unit equipped with basic wash facilities for remote sites.",
    image: MOCK_IMAGE,
    tag: "Portable Toilets",
    location: "UAE Wide",
  },
  {
    id: 2,
    title: "VIP Luxury Restroom",
    description: "Premium portable restroom featuring flushing systems, mirrors, and high-end finishes for events.",
    image: MOCK_IMAGE,
    tag: "Portable Toilets",
    location: "Dubai",
  },
  {
    id: 3,
    title: "Site Office Cabin (20ft)",
    description: "Spacious, insulated, and well-ventilated portable cabin designed for immediate deployment as site offices.",
    image: MOCK_IMAGE,
    tag: "Portable Cabins",
    location: "Abu Dhabi",
  },
  {
    id: 4,
    title: "Modular Accommodation Cabin",
    description: "Comfortable and resilient living spaces suitable for remote labor camps and construction crews.",
    image: MOCK_IMAGE,
    tag: "Portable Cabins",
    location: "Sharjah",
  },
  {
    id: 5,
    title: "Bulletproof Guard Shack",
    description: "High-security cabin offering panoramic visibility and advanced reinforcement for critical checkpoints.",
    image: MOCK_IMAGE,
    tag: "Security Cabins",
    location: "UAE Wide",
  },
  {
    id: 6,
    title: "Compact Security Kiosk",
    description: "Space-efficient cabin perfect for parking lots, residential entrances, and event ticketing.",
    image: MOCK_IMAGE,
    tag: "Security Cabins",
    location: "Dubai",
  },
  {
    id: 7,
    title: "Multi-Tap Handwash Station",
    description: "Freestanding hand hygiene station featuring multiple sinks, soap dispensers, and hands-free operation.",
    image: MOCK_IMAGE,
    tag: "Handwash Stations",
    location: "Events",
  },
  {
    id: 8,
    title: "Portable Sink Station",
    description: "Compact single-user handwash unit built to meet immediate health and safety requirements on site.",
    image: MOCK_IMAGE,
    tag: "Handwash Stations",
    location: "Construction Sites",
  },
  {
    id: 9,
    title: "Custom Container Café",
    description: "Fully customized shipping container conversion built to serve as a trendy popup café or retail shop.",
    image: MOCK_IMAGE,
    tag: "Container Conversion",
    location: "Commercial",
  },
  {
    id: 10,
    title: "Storage Container Workshop",
    description: "Heavy-duty converted container fully fitted with racks, electrical outfittings, and heavy doors.",
    image: MOCK_IMAGE,
    tag: "Container Conversion",
    location: "Industrial",
  },
  {
    id: 11,
    title: "Portable Solar Power Unit",
    description: "Eco-friendly, mobile solar arrays designed to provide sustainable energy for remote sites.",
    image: MOCK_IMAGE,
    tag: "Miscellaneous",
    location: "Renewable Energy",
  },
  {
    id: 12,
    title: "Site Security Fencing",
    description: "High-strength, temporary interlocking fences for perimeters and hazard zones.",
    image: MOCK_IMAGE,
    tag: "Miscellaneous",
    location: "Site Safety",
  },
  {
    id: 13,
    title: "Industrial Water Storage Tank",
    description: "High-capacity UV-resistant water tanks suitable for potable water or construction use.",
    image: MOCK_IMAGE,
    tag: "Miscellaneous",
    location: "Utility Support",
  },
  {
    id: 14,
    title: "Heavy-Duty Portable AC Unit",
    description: "Powerful mobile cooling units engineered for industrial cabins and large event tents.",
    image: MOCK_IMAGE,
    tag: "Miscellaneous",
    location: "Climate Control",
  },
  {
    id: 15,
    title: "Portable Septic Tank System",
    description: "Spill-proof, easy-to-install underground sanitation containers for remote site bathrooms.",
    image: MOCK_IMAGE,
    tag: "Miscellaneous",
    location: "Sanitation Systems",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All Products"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((product) => product.tag === activeCategory);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen">

      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Kazema <span className="text-[#006217] dark:text-[#28a745]">Product Catalog</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Explore our extensive range of high-quality, durable modular units designed for performance and reliability across any sector.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 relative">

        {/* Left Sidebar Layout */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center gap-2 mb-6 text-foreground font-semibold">
            <Filter className="w-5 h-5 text-[#006217] dark:text-[#28a745]" />
            <span className="text-lg tracking-tight">Categories</span>
          </div>

          {/* Mobile Category Scroll / Desktop Category List */}
          <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x">
            {CATEGORIES.map((cat) => {
              const count = cat === "All Products"
                ? MOCK_PRODUCTS.length
                : MOCK_PRODUCTS.filter(p => p.tag === cat).length;

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
              {filteredProducts.length} Items
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-in fade-in zoom-in-95 duration-500">
                  <Card
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    tag={product.tag}
                  // For modern product UI, we hide extra details if you just want quote buttons.
                  // The Card component natively renders primary green buttons if hideButtons not passed.
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center border border-dashed rounded-xl border-border bg-muted/10">
              <p className="text-lg font-medium text-muted-foreground">No products found for this category.</p>
              <button
                onClick={() => setActiveCategory("All Products")}
                className="mt-6 text-[#006217] dark:text-[#28a745] underline font-semibold underline-offset-4"
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
