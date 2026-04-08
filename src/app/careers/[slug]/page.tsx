"use client";

import React from "react";
import { useParams } from "next/navigation";
import { MOCK_JOBS } from "@/data/careers";
import { 
  MapPin, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  GraduationCap, 
  ChevronRight, 
  Mail, 
  Phone, 
  CloudUpload,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SingleJobPage() {
  const { slug } = useParams();
  const job = MOCK_JOBS.find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Position Not Found</h1>
        <p className="text-muted-foreground mb-8">The job posting you are looking for might have been closed or moved.</p>
        <Link href="/careers" className="bg-[#006217] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[11px]">
          Back to Careers
        </Link>
      </div>
    );
  }

  // Get related jobs (exclude current)
  const relatedJobs = MOCK_JOBS.filter(j => j.id !== job.id).slice(0, 3);

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Hero Header */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-muted/5 border-b border-border/40 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#006217] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="inline-block px-4 py-1.5 bg-[#006217]/10 text-[#006217] rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#006217]/20">
                Open Position
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-[#006217]" />
                  <span className="text-sm font-bold uppercase tracking-widest">{job.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Briefcase size={18} className="text-[#006217]" />
                  <span className="text-sm font-bold uppercase tracking-widest">{job.type}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 size={18} className="text-[#006217]" />
                  <span className="text-sm font-bold uppercase tracking-widest">{job.department}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a href="#apply" className="flex-1 bg-[#006217] text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-[#006217]/20 hover:bg-[#004e12] transition-all active:scale-95 flex items-center justify-center">
                Apply for this role
              </a>
              <button className="flex-1 bg-card border border-border text-[#006217] text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-muted/50 transition-all">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* The Role */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#006217]"></span>
                <h2 className="text-2xl font-black tracking-tight uppercase text-foreground">The Role</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {job.fullRole}
              </p>
            </section>

            {/* Responsibilities & Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section>
                <div className="flex items-center gap-3 mb-10">
                    <CheckCircle2 className="text-[#006217]" size={24} />
                    <h3 className="text-xl font-black tracking-tighter uppercase">Key Responsibilities</h3>
                </div>
                <ul className="space-y-6">
                  {job.responsibilities?.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 flex-shrink-0 bg-[#006217]/10 rounded-md flex items-center justify-center">
                        <ChevronRight className="text-[#006217]" size={12} />
                      </div>
                      <span className="text-muted-foreground font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-10">
                    <GraduationCap className="text-[#006217]" size={24} />
                    <h3 className="text-xl font-black tracking-tighter uppercase">Requirements</h3>
                </div>
                <ul className="space-y-6">
                  {job.requirements?.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 flex-shrink-0 bg-[#006217]/10 rounded-md flex items-center justify-center text-[#006217]">
                        <Award size={12} fill="currentColor" />
                      </div>
                      <span className="text-muted-foreground font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Why Kazema Benefits */}
            <section className="pt-10">
              <h2 className="text-2xl font-black tracking-tighter uppercase mb-10 text-foreground">Why Kazema Global?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Competitive Salary", desc: "Industry-leading base pay structure with on-time disbursements.", icon: <CreditCard /> },
                  { title: "High Commission", desc: "Rewarding performance-based incentives with no earning caps.", icon: <TrendingUp /> },
                  { title: "Growth Path", desc: "Clear pathways to management for high-achieving sales leaders.", icon: <TrendingUp /> },
                  { title: "Safe Environment", desc: "Stability of a market leader with over a decade of UAE heritage.", icon: <ShieldCheck /> }
                ].map((benefit, i) => (
                  <div key={i} className="bg-card border border-border p-8 rounded-[2rem] hover:border-[#006217]/40 transition-all group">
                    <div className="text-[#006217] mb-6 group-hover:scale-110 transition-transform w-fit">
                        {React.cloneElement(benefit.icon as React.ReactElement<{size: number}>, { size: 32 })}
                    </div>
                    <h4 className="font-black text-lg mb-2 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Application Form */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-card border border-border p-10 rounded-[3rem] shadow-2xl shadow-[#006217]/5" id="apply">
              <h3 className="text-xl font-black tracking-tighter mb-8 uppercase text-foreground">Apply for this position</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Full Name</label>
                  <input className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] transition-all outline-none font-medium text-sm" placeholder="John Doe" type="text"/>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Email</label>
                    <input className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] transition-all outline-none font-medium text-sm" placeholder="john@example.com" type="email"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Phone</label>
                    <input className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] transition-all outline-none font-medium text-sm" placeholder="+971 50..." type="tel"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">CV / Resume Upload</label>
                  <div className="relative group">
                    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file"/>
                    <div className="flex flex-col items-center justify-center gap-3 w-full bg-muted/10 border-2 border-dashed border-border rounded-[2rem] px-5 py-10 group-hover:border-[#006217]/40 transition-colors">
                      <CloudUpload className="text-muted-foreground group-hover:text-[#006217]" size={32} />
                      <span className="text-xs font-black uppercase tracking-widest text-foreground">Upload CV (PDF/DOC)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#006217] ml-1">Message (Optional)</label>
                  <textarea className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#006217]/20 focus:border-[#006217] transition-all outline-none font-medium text-sm resize-none" placeholder="Brief motivation..." rows={4}></textarea>
                </div>
                <button className="w-full bg-[#006217] text-white font-black py-5 rounded-2xl hover:bg-[#004e12] transition-transform active:scale-95 shadow-lg shadow-[#006217]/20 uppercase tracking-widest text-[11px]" type="submit">
                    Submit Application
                </button>
                <p className="text-[9px] text-center text-muted-foreground leading-tight mt-6 font-medium px-4">
                  By submitting, you agree to our privacy policy and consent to the processing of your data for recruitment.
                </p>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Jobs */}
      <section className="bg-muted/5 border-t border-border/40 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-4 uppercase">Other Opportunities</h2>
              <p className="text-muted-foreground font-medium">Join our mission to build modular excellence.</p>
            </div>
            <Link href="/careers" className="text-[#006217] font-black text-xs uppercase tracking-widest flex items-center gap-2 group">
              View all roles
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedJobs.map((rJob) => (
              <div key={rJob.id} className="bg-card border border-border p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-[#006217]/5 transition-all group cursor-pointer flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-[#006217]/5 text-[#006217] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#006217]/10">{rJob.department}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{rJob.type}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight group-hover:text-[#006217] transition-colors leading-tight uppercase">{rJob.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium line-clamp-2">{rJob.description}</p>
                </div>
                <Link href={`/careers/${rJob.slug}`} className="mt-8">
                  <button className="w-full py-4 rounded-2xl border border-[#006217] text-[#006217] font-black uppercase tracking-widest text-[10px] hover:bg-[#006217] hover:text-white transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#006217] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left text-white">
            <h3 className="text-3xl font-black tracking-tighter mb-3">Questions about hiring?</h3>
            <p className="text-[#91f8b7] font-medium opacity-80 uppercase tracking-widest text-xs">Our recruitment team is here to assist you.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="mailto:recruitment@kazemaglobal.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#006217] transition-all">
                <Mail size={18} />
              </div>
              <div className="text-white">
                 <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Recruitment Support</p>
                 <p className="font-bold">recruitment@kazemaglobal.com</p>
              </div>
            </a>
            <button className="bg-white text-[#006217] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#91f8b7] transition-all active:scale-95 shadow-xl">
               Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
