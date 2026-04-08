"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/card";
import { LayoutGrid, Filter, Search, ChevronRight } from "lucide-react";

/**
 * Project Categories - Matching Product Categories
 */
const CATEGORIES = [
  "All Projects",
  "Portable Toilets",
  "Portable Cabins",
  "Security Cabins",
  "Handwash Stations",
  "Container Conversion",
  "Miscellaneous",
];

/**
 * Mock Project Data
 */
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Luxury Yacht Event Sanitation Setup",
    description: "Premium portable toilet deployment for high-profile maritime event at Dubai Marina.",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    tag: "Portable Toilets",
    category: "Portable Toilets",
    location: "Dubai",
    date: "Feb 2026",
    slug: "luxury-yacht-event"
  },
  {
    id: 2,
    title: "Abu Dhabi Industrial Labor Housing",
    description: "Multi-cabin site accommodation units with integrated plumbing and climate control.",
    image: "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
    tag: "Portable Cabins",
    category: "Portable Cabins",
    location: "Abu Dhabi",
    date: "Jan 2026",
    slug: "industrial-housing-abu-dhabi"
  },
  {
    id: 3,
    title: "Downtown Dubai Security Kiosk Network",
    description: "Installation of modular security shacks across premier residential entrances.",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    tag: "Security Cabins",
    category: "Security Cabins",
    location: "Dubai",
    date: "Dec 2025",
    slug: "downtown-security-kiosks"
  },
  {
    id: 4,
    title: "Sharjah Exhibition Handwash Deployment",
    description: "Health-safety stations deployed major regional exhibition centers.",
    image: "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
    tag: "Handwash Stations",
    category: "Handwash Stations",
    location: "Sharjah",
    date: "Nov 2025",
    slug: "sharjah-exhibition-hygiene"
  },
  {
    id: 5,
    title: "Container Café Pop-up - Al Jaddaf",
    description: "Bespoke container conversion project for a waterfront retail experience.",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    tag: "Container Conversion",
    category: "Container Conversion",
    location: "Dubai",
    date: "Oct 2025",
    slug: "al-jaddaf-container-cafe"
  },
  {
    id: 6,
    title: "Remote Site Ablution Project",
    description: "Large-scale sanitation infrastructure for energy sector remote camps.",
    image: "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
    tag: "Portable Toilets",
    category: "Portable Toilets",
    location: "Fujairah",
    date: "Sept 2025",
    slug: "remote-site-ablution"
  }
];

export default function ProjectsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen bg-background text-foreground font-body">
      
      {/* Header Section */}
      <section className="mb-12">
        <SectionHeader 
          title="Completed Projects"
          description="Explore our track record of excellence. From luxury events to industrial infrastructure, see how Kazema solutions are deployed across the Middle East."
        />
      </section>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Sidebar - Categories */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit bg-card/30 backdrop-blur-sm border border-border/60 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-8 text-[#006217] font-black uppercase tracking-widest text-xs">
            <Filter size={16} />
            Filter by Category
          </div>
          
          <nav className="flex flex-col gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#006217] text-white shadow-lg shadow-[#006217]/20 translate-x-1"
                    : "bg-background/50 text-muted-foreground hover:bg-white dark:hover:bg-muted/50 hover:text-[#006217] hover:translate-x-1 border border-transparent hover:border-border/60"
                }`}
              >
                {category}
                <ChevronRight size={14} className={`transition-transform duration-300 ${selectedCategory === category ? "rotate-90 text-white" : "group-hover:translate-x-1 opacity-40"}`} />
              </button>
            ))}
          </nav>

          {/* Search Box in Sidebar */}
          <div className="mt-10 relative">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] transition-all"
            />
            <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </aside>

        {/* Right Content Area - Grid */}
        <div className="flex-1">
          {/* Active Filter Info */}
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-3">
              <LayoutGrid size={20} className="text-[#006217]" />
              <h2 className="text-lg font-black tracking-tight">{selectedCategory}</h2>
              <span className="text-xs font-bold bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                {filteredProjects.length} Projects
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  {...project} 
                  showReadMore={true}
                  hideButtons={true} 
                  href={`/projects/${project.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-muted/20 border border-dashed border-border rounded-3xl">
              <LayoutGrid size={48} className="text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-bold tracking-tight">No projects found in this category.</p>
              <button 
                onClick={() => {setSelectedCategory("All Projects"); setSearchQuery("");}}
                className="mt-4 text-[#006217] text-xs font-black uppercase tracking-widest cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
