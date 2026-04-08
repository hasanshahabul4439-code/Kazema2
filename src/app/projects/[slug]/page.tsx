"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Share2,
  ArrowUpRight,
  LayoutGrid
} from "lucide-react";
import Card from "@/components/card";

/**
 * Shared Model for Related Projects
 */
const MOCK_PROJECTS_GALLERY = [
  "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
  "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp",
  "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
  "https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp"
];

const RELATED_PROJECTS = [
  {
    id: 1,
    title: "Luxury Yacht Event Sanitation",
    description: "Multi-stall premium trailer setup designed for high-profile events.",
    image: MOCK_PROJECTS_GALLERY[1],
    tag: "Portable Toilets",
    location: "Dubai",
    date: "Feb 2026",
    href: "/projects/luxury-yacht-event"
  },
  {
    id: 2,
    title: "Eco Site Office Complex",
    description: "Wheelchair accessible portable units for international stadium project.",
    image: MOCK_PROJECTS_GALLERY[2],
    tag: "Portable Toilets",
    location: "UAE Wide",
    date: "Jan 2026",
    href: "/projects/eco-site-office"
  }
];

export default function SingleProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);

  // Clean strings for UI display
  const titleStr = slug ? String(slug).replace(/-/g, " ") : "Project Overview";

  const [activeImage, setActiveImage] = useState(MOCK_PROJECTS_GALLERY[0]);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-screen bg-background text-foreground font-body">

      {/* Sticky Top Navigation Action */}
      <div className="sticky top-16 z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-background/0 backdrop-blur-[2px] pointer-events-none mb-4">
        <button
          onClick={() => router.push('/projects')}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background dark:bg-card hover:bg-white dark:hover:bg-muted/40 hover:border-[#006217]/30 hover:text-[#006217] transition-all duration-500 text-xs font-black uppercase tracking-widest shadow-lg pointer-events-auto cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-500" />
          Back to Projects Catalog
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative mb-24">
        
        {/* Left Gallery Section */}
        <div className="flex-1 space-y-6">
          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl group cursor-pointer bg-muted/20">
            <Image
              src={activeImage}
              alt="Project Showcase"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-[#006217] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                Case Study
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {MOCK_PROJECTS_GALLERY.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 group cursor-pointer ${
                  activeImage === img ? "border-[#006217] scale-95 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover group-hover:scale-110 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Details Section */}
        <div className="w-full lg:w-[400px] flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#006217] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              <CheckCircle2 size={14} />
              Featured Deployment
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-foreground tracking-tighter leading-[1.1] mb-6 capitalize">
              {titleStr}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              Transforming project requirements into durable, modular realities. 
              Our deployment at {titleStr.split(' ')[0]} stands as a benchmark for quality and engineering precision.
            </p>
          </div>

          {/* Project Stats Card */}
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006217]/5 flex items-center justify-center text-[#006217]">
                        <Building2 size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Client</p>
                        <p className="text-sm font-black text-foreground mt-1">Industrial Leaders UAE</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006217]/5 flex items-center justify-center text-[#006217]">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Location</p>
                        <p className="text-sm font-black text-foreground mt-1">United Arab Emirates</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006217]/5 flex items-center justify-center text-[#006217]">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Completed</p>
                        <p className="text-sm font-black text-foreground mt-1">February 2026</p>
                    </div>
                </div>
            </div>
          </div>

          <button className="w-full bg-[#006217] text-white py-5 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#004e12] transition-all shadow-xl hover:-translate-y-1 transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer group">
            Inquire About Similar Scale
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center justify-between px-2">
            <button className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-[#006217] transition-colors cursor-pointer group">
              <Share2 size={14} />
              Share Portfolio
            </button>
            <Link href="/support/contact-us" className="text-xs font-bold text-muted-foreground hover:text-[#006217] transition-colors">
              Report Issue
            </Link>
          </div>
        </div>
      </div>

      {/* Case Study Content Block */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
                <div>
                    <h2 className="text-2xl font-headline font-black text-foreground mb-6 flex items-center gap-3">
                        <LayoutGrid className="text-[#006217]" size={24} />
                        Project Overview
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed font-medium">
                        <p>
                            Kazema Global was tasked with providing a full-scale sanitation and accommodation infrastructure for a high-priority 
                            industrial deployment. Our challenge was to ensure that all units met the rigorous UAE safety standards while 
                            providing maximum comfort for the workforce.
                        </p>
                        <p>
                            The project involved the design and installation of custom-configured ablution units and insulated site cabins 
                            integrated with self-contained plumbing systems. Our professional installation team completed the deployment 
                            within the strict two-week window requested by the client.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/20 p-8 rounded-[2rem] border border-border/40">
                    <div>
                        <h4 className="font-black text-foreground text-sm uppercase tracking-widest mb-4">Key Deliverables</h4>
                        <ul className="space-y-3">
                            {["15x Standard Sanitary Units", "05x VIP Executive Wagons", "Integrated Waste Management", "Professional On-site Maintenance"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#006217]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-foreground text-sm uppercase tracking-widest mb-4">Technical Highlights</h4>
                        <ul className="space-y-3">
                            {["Anti-corrosive Paneling", "UV-Stabilized Roofing", "Smart Water Conservation", "HEPA Filtration HVAC"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#006217]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#006217]/5 rounded-[2rem] p-8 border border-[#006217]/10 h-fit">
                <h3 className="font-headline font-black text-[#006217] text-xl mb-6">Need a similar solution?</h3>
                <p className="text-sm font-medium text-[#006217]/70 leading-relaxed mb-8">
                    Every project presents unique challenges. Our engineering team specializes in scaling our 
                    modular units to meet the specific demands of your site and timelines.
                </p>
                <div className="space-y-4">
                    <button className="w-full bg-white text-[#006217] py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-sm hover:shadow-md transition-all cursor-pointer">
                        Request Site Survey
                    </button>
                    <button className="w-full bg-[#006217] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-sm hover:shadow-md transition-all cursor-pointer">
                        Get Technical Specs
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="pt-24 border-t border-border/60">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-headline font-black tracking-tight text-foreground mb-4">
              Similar Projects Portfolio
            </h2>
            <p className="text-muted-foreground font-medium">Explore more industry-leading deployments from our portfolio.</p>
          </div>
          <Link 
            href="/projects" 
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#006217] hover:gap-4 transition-all"
          >
            All Projects <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {RELATED_PROJECTS.map((project) => (
            <Card 
              key={project.id} 
              {...project} 
              hideButtons={true} 
              showReadMore={true}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
