"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowDown
} from "lucide-react";

const DOCUMENTS = [
  {
    id: 1,
    title: "Global Product Catalogue 2026",
    type: "PDF Portfolio",
    version: "v4.2",
    size: "18.4 MB",
    description: "Complete technical specifications for portable toilets, ablution blocks, and modular units.",
    category: "Catalogue"
  },
  {
    id: 2,
    title: "Site Preparation & Installation Guide",
    type: "Technical PDF",
    version: "v2.1",
    size: "4.8 MB",
    description: "Comprehensive requirements for ground leveling, plumbing connections, and electrical setup.",
    category: "Technical"
  },
  {
    id: 3,
    title: "ISO Certification Portfolio",
    type: "Legal Document",
    version: "2026 Update",
    size: "12.2 MB",
    description: "Official certifications for quality management, environmental standards, and safety compliance.",
    category: "Compliance"
  },
  {
    id: 4,
    title: "Maintenance & Sanitation Protocol",
    type: "Operations Manual",
    version: "v3.0",
    size: "2.4 MB",
    description: "Best practices for daily cleaning, chemical dosing, and structural maintenance.",
    category: "Technical"
  },
  {
    id: 5,
    title: "Modular Housing Case Studies",
    type: "Project Portfolio",
    version: "v1.5",
    size: "24.6 MB",
    description: "High-resolution visual journey of our latest large-scale deployments globally.",
    category: "Case Study"
  },
  {
    id: 6,
    title: "Customization & Branding Guide",
    type: "Design PDF",
    version: "v1.2",
    size: "6.1 MB",
    description: "Options for custom colors, corporate branding, and specialized sanitation features.",
    category: "Design"
  }
];

const BROCHURES = [
  {
    id: "b1",
    title: "Luxury Portable Toilet Series",
    description: "Premium hygiene solutions including VIP trailers, executive pods, and luxury standalone units.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtYdQy3F8jMWCC_GIs2U3pAmAUagg1NtVoPPTUCFfi9lX0UOf5ZVJmAR2qgq_x4s_I_9DXVKK2IgbJiRkS7ucoYc182zLjAf99oRgjvHRtpeAkofL-d8INHQ4gJBu06dLM-E1lCVg700t-i4J81H1H00kiO1i210hV_JZL78nzWtrHPa3_KbaJHUxgT4pFNzx_yaFoAU_PAE5PeqX3Mmj_iihKwslwZl725HunqlZMyNnfkDy1lXrmP-IyUFamr5k1GmxmLqlVApE",
    tag: "Premium Line"
  },
  {
    id: "b2",
    title: "Modular Site Cabin Solutions",
    description: "Versatile modular cabins for site offices, staff accommodation, and security posts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3_88p0Fkx0LW6S975Xw3sJU-5U0EaMvD6vIfTftDSLg-nxfz-v3j5VggiDzz2d3hsF71K-N5CpgwwiE5ujZYz67Jn4WHgesW0dpPe-EV_eIALN8M7vUOC5l1SDmWzU_zgxAm9oPUaC4sLbVqhTgaCFcpJUAAklIuw4vJUyQldCqGsQLkIEwj1JolKLWAcQBPMc0sIZr6bJJu4XgyCptrJXI-qDBUyFrveqbpPsspjNI8Z7lUtyK2GgaL6Ug3HXAX4qpwezHEIcqA",
    tag: "Industrial"
  },
  {
    id: "b3",
    title: "Eco-Friendly Hygiene Units",
    description: "Sustainable sanitation solutions featuring solar power and water recycling technologies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQYR41RtB6B8DVHEU9CMNc9xDAoiuVlcCwgcEQIMKsmTLaKgjHJ8-Y8i72WnTh_XJ6iW9urQ1IYrtgKHwcboXk6w7O5CSGSLVcRzrMR6gxnZJLIy2kWSw5KOyEyzjMFxOoujAuuBoUp6RahczTcQI1qGLoRZhGQUn-XaFjPKzbxKrJeMtRB3vuWoZf9BmoQuFbR_zhyKGZ93jqe8vvvW3NZOvYU4DGxWbAf-_j5WzuU60eGHj8wJ_Dxg_swebk98Vs3iQKhvNUZg",
    tag: "Sustainability"
  }
];

const CERTIFICATES = [
  {
    id: "c1",
    title: "ISO 9001:2015 Certification",
    issuer: "Global Standards Bureau",
    description: "Certified for Quality Management Systems in modular unit manufacturing.",
    validity: "Valid until 2028",
    status: "Verified"
  },
  {
    id: "c2",
    title: "ISO 14001:2015 Certification",
    issuer: "EcoCert Global",
    description: "Certified for Environmental Management Systems and sustainable practices.",
    validity: "Valid until 2027",
    status: "Verified"
  },
  {
    id: "c3",
    title: "OHSAS 18001/ISO 45001",
    issuer: "Safety Assurance Ltd",
    description: "Occupational Health and Safety management systems certification.",
    validity: "Valid until 2029",
    status: "Verified"
  }
];

const FEATURED = [
  {
    id: 1,
    title: "Full Product Catalog 2026",
    subtitle: "Our most comprehensive resource featuring portable toilets, cabins, and full site modules.",
    badge: "High Demand",
    size: "28.4 MB",
    button: "Download PDF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQYR41RtB6B8DVHEU9CMNc9xDAoiuVlcCwgcEQIMKsmTLaKgjHJ8-Y8i72WnTh_XJ6iW9urQ1IYrtgKHwcboXk6w7O5CSGSLVcRzrMR6gxnZJLIy2kWSw5KOyEyzjMFxOoujAuuBoUp6RahczTcQI1qGLoRZhGQUn-XaFjPKzbxKrJeMtRB3vuWoZf9BmoQuFbR_zhyKGZ93jqe8vvvW3NZOvYU4DGxWbAf-_j5WzuU60eGHj8wJ_Dxg_swebk98Vs3iQKhvNUZg"
  },
  {
    id: 2,
    title: "Site Planning Toolkit",
    subtitle: "Site prep requirements, plumbing diagrams, and electrical specs for modular infrastructure.",
    badge: "Utility Pack",
    size: "42.1 MB",
    button: "Download ZIP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtYdQy3F8jMWCC_GIs2U3pAmAUagg1NtVoPPTUCFfi9lX0UOf5ZVJmAR2qgq_x4s_I_9DXVKK2IgbJiRkS7ucoYc182zLjAf99oRgjvHRtpeAkofL-d8INHQ4gJBu06dLM-E1lCVg700t-i4J81H1H00kiO1i210hV_JZL78nzWtrHPa3_KbaJHUxgT4pFNzx_yaFoAU_PAE5PeqX3Mmj_iihKwslwZl725HunqlZMyNnfkDy1lXrmP-IyUFamr5k1GmxmLqlVApE"
  }
];

export default function DownloadCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-[#006217]/20 selection:text-[#006217]">
      <section className="relative overflow-hidden bg-muted/20 dark:bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3_88p0Fkx0LW6S975Xw3sJU-5U0EaMvD6vIfTftDSLg-nxfz-v3j5VggiDzz2d3hsF71K-N5CpgwwiE5ujZYz67Jn4WHgesW0dpPe-EV_eIALN8M7vUOC5l1SDmWzU_zgxAm9oPUaC4sLbVqhTgaCFcpJUAAklIuw4vJUyQldCqGsQLkIEwj1JolKLWAcQBPMc0sIZr6bJJu4XgyCptrJXI-qDBUyFrveqbpPsspjNI8Z7lUtyK2GgaL6Ug3HXAX4qpwezHEIcqA"
            alt="Kazema background"
            fill
            className="object-cover opacity-40 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#006217]/90 via-[#006217]/30 to-transparent dark:from-[#152b12]/90 dark:via-[#163518]/60" />
        </div>

        <div className="relative z-10 max-w-2xl  px-10 py-10">
          <div className="max-w-3xl text-left">
            <span className="text-[10px] font-black font-headline uppercase tracking-[0.4em] text-[#006217] dark:text-[#28a745] mb-4 inline-block">
              Download Center
            </span>
            <h1 className="text-2xl md:text-3xl font-black font-headline text-[#006217] dark:text-[#28a745] mb-6 tracking-tight leading-tight">
              Product Literature, Media & Certifications
            </h1>
            <p className="text-sm md:text-base text-muted-foreground/90 dark:text-muted-foreground leading-relaxed mb-10">
              Access brochures, CAD files, official certifications and installation guides for Kazema’s modular hygiene and cabin solutions.
            </p>

            <div className="relative mx-auto max-w-3xl">
              <span className="absolute inset-y-0 left-5 flex items-center text-muted-foreground">
                <FileText size={20} />
              </span>
              <input
                id="download-search"
                type="search"
                placeholder="Search resources, model numbers, or certificates..."
                className="w-full rounded-full border border-border bg-background dark:bg-slate-950/80 px-16 py-4 text-base text-foreground shadow-xl shadow-[#006217]/10 outline-none transition focus:border-[#006217] focus:ring-2 focus:ring-[#006217]/20"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#006217] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-[#006217]/20 transition hover:bg-[#005214]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-[72px] md:top-[78px] z-30 bg-background/95 backdrop-blur-md border-b border-border/20 dark:bg-slate-950/95">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-muted/20 p-1.5 dark:bg-white/5">
            <button 
              className="rounded-full bg-[#006217] dark:bg-[#28a745] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:scale-105 active:scale-95"
              onClick={() => document.getElementById("p-literature")?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Documents
            </button>
            <button 
              className="rounded-full px-6 py-3 text-sm font-black text-foreground/70 hover:text-foreground transition hover:bg-[#006217]/5 hover:scale-105 active:scale-95"
              onClick={() => document.getElementById("p-brochures")?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Brochures
            </button>
            <button 
              className="rounded-full px-6 py-3 text-sm font-black text-foreground/70 hover:text-foreground transition hover:bg-[#006217]/5 hover:scale-105 active:scale-95"
              onClick={() => document.getElementById("p-certificates")?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Certificates
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        <section id="p-literature" className="scroll-mt-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-[#006217] font-black text-[10px] uppercase tracking-[0.4em]">
                Available Resources
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground font-headline">
                Product Literature & Media
              </h2>
            </div>
            <button className="inline-flex items-center gap-2 text-[#006217] font-black uppercase tracking-[0.2em] text-sm">
              Filter Results <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {DOCUMENTS.map((doc) => (
              <article key={doc.id} className="group bg-card dark:bg-slate-900 border border-border/50 rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="rounded-3xl bg-[#006217]/10 text-[#006217] dark:bg-[#28a745]/10 dark:text-[#28a745] p-4">
                    <FileText size={26} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#006217] bg-[#006217]/10 dark:bg-[#28a745]/10 rounded-full px-3 py-1">
                    {doc.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-3 leading-tight">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1 text-sm text-muted-foreground/80">
                    <div className="flex items-center gap-2"><Clock size={14} /> {doc.version}</div>
                    <div className="uppercase tracking-[0.2em] text-[11px] text-muted-foreground">{doc.type}</div>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#006217] hover:bg-[#005214] text-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition">
                    <Download size={14} /> Download
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="p-brochures" className="space-y-10 scroll-mt-32">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-1 rounded-full bg-[#006217]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#006217] font-black">Marketing Literature</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-foreground font-headline">
              Product Brochures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BROCHURES.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-lg transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#006217] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-[#006217] py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#005214]">
                    <Download size={14} /> Download Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="p-certificates" className="space-y-10 scroll-mt-32">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-1 rounded-full bg-[#006217]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#006217] font-black">Official Compliance</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-foreground font-headline">
              Quality & Security Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((item) => (
              <div key={item.id} className="group p-8 rounded-[2rem] bg-[#006217]/5 border border-[#006217]/20 transition-all duration-300 hover:bg-[#006217]/10 hover:border-[#006217]/40 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006217]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-[#006217]/20 flex items-center justify-center text-[#006217] shadow-sm">
                      <ShieldCheck size={28} />
                    </div>
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#006217] bg-[#006217]/10 px-3 py-1 rounded-full">
                      <CheckCircle2 size={12} /> {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/60">{item.issuer}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-[#006217]/10 mt-auto">
                      <span className="text-xs font-bold text-muted-foreground">{item.validity}</span>
                      <button className="text-[#006217] font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Verify <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2.5rem] bg-[#006217] text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black font-headline mb-4 tracking-tight leading-tight">
                Need More Information?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Our technical support team is ready to provide documentation, custom 3D models, or project-specific certifications upon request.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 text-[#006217] font-black uppercase tracking-[0.2em] text-center shadow-lg transition hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/get-a-quote"
                className="w-full sm:w-auto rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-white font-black uppercase tracking-[0.2em] text-center transition hover:bg-white/20"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
